import React, { useState, useEffect } from "react";

const GRID_SIZE = 10;
const SHIPS = [
  { name: "Carrier", size: 5, color: "#1E90FF" },
  { name: "Battleship", size: 4, color: "#4682b4" },
  { name: "Cruiser", size: 3, color: "#6495ed" },
  { name: "Submarine", size: 3, color: "#4169e1" },
  { name: "Destroyer", size: 2, color: "#87ceeb" },
];

const Battleship = () => {
  const [player1Board, setPlayer1Board] = useState(createEmptyBoard());
  const [player2Board, setPlayer2Board] = useState(createEmptyBoard());
  const [player2Ships, setPlayer2Ships] = useState([]);
  const [isPlacingShips, setIsPlacingShips] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentTurn, setCurrentTurn] = useState("Player 2");
  const [message, setMessage] = useState("Place your ships!");

  useEffect(() => {
    const board = createEmptyBoard();
    placeShipsRandomly(board);
    setPlayer1Board(board);
  }, []);

  const handleStartGame = () => {
    if (player2Ships.length === SHIPS.length) {
      setIsPlacingShips(false);
      setGameStarted(true);
      setMessage("Game Started! Player 2's turn.");
    } else {
      alert("Please place all your ships before starting the game.");
    }
  };

  const handlePlayer2Click = (row, col) => {
    if (!isPlacingShips) return;
    const currentShip = SHIPS[player2Ships.length];
    if (currentShip) {
      const boardCopy = [...player2Board];
      if (canPlaceShip(boardCopy, currentShip.size, row, col)) {
        placeShip(boardCopy, currentShip.size, row, col, currentShip.color);
        setPlayer2Board(boardCopy);
        setPlayer2Ships([...player2Ships, currentShip]);
        if (player2Ships.length === SHIPS.length - 1) {
          setMessage("All ships placed! Click Start to begin.");
        }
      } else {
        alert("Invalid ship placement. Try again.");
      }
    }
  };

  const handleGameClick = (row, col) => {
    if (!gameStarted || currentTurn !== "Player 2") return;
    const boardCopy = [...player1Board];
    if (boardCopy[row][col] === "X" || boardCopy[row][col] === "O") {
      setMessage("You've already attacked this spot.");
      return;
    }
    if (boardCopy[row][col]) {
      boardCopy[row][col] = "X";
      setMessage("Hit!");
    } else {
      boardCopy[row][col] = "O";
      setMessage("Miss!");
    }
    setPlayer1Board(boardCopy);
    setCurrentTurn("Player 1");
    setTimeout(() => computerTurn(), 1000);
  };

  const computerTurn = () => {
    const boardCopy = [...player2Board];
    let row, col;
    do {
      row = Math.floor(Math.random() * GRID_SIZE);
      col = Math.floor(Math.random() * GRID_SIZE);
    } while (boardCopy[row][col] === "X" || boardCopy[row][col] === "O");

    if (boardCopy[row][col]) {
      boardCopy[row][col] = "X";
      setMessage("Computer hits!");
    } else {
      boardCopy[row][col] = "O";
      setMessage("Computer misses!");
    }
    setPlayer2Board(boardCopy);
    setCurrentTurn("Player 2");
  };

  return (
    <div style={styles.container}>
      <p style={styles.message}>{message}</p>
      <span style={{display:"flex"}}>
        <p style={{marginLeft: "270px"}}>Player 1 (Computer)</p>
        <p style={{marginLeft: "290px"}}>Player 2 (You)</p>
      </span>
      <div style={styles.boardContainer}>
        <Board
          board={player1Board}
          onClick={gameStarted ? null : undefined}
        />
        <Board
          board={player2Board}
          onClick={isPlacingShips ? handlePlayer2Click : handleGameClick}
        />
      </div>
      {isPlacingShips && (
        <button onClick={handleStartGame} style={styles.startButton}>
          Start Game
        </button>
      )}
    </div>
  );
};

const Board = ({ board, label, onClick }) => (
  <div style={styles.boardContainer}>
    <h2 style={styles.boardLabel}>{label}</h2>
    <div>
      {/* Add row with letters */}
      <div style={styles.row}>
        <div style={{ ...styles.cell, cursor: "default", backgroundColor: "#2a6ca2", color: "white", fontWeight: "bold" }}></div>
        {Array.from({ length: GRID_SIZE }, (_, colIndex) => (
          <div
            key={`header-${colIndex}`}
            style={{
              ...styles.cell,
              cursor: "default",
              fontWeight: "bold",
              backgroundColor: "#2a6ca2",
              color: "white",
            }}
          >
            {String.fromCharCode(65 + colIndex)} {/* Display letters instead of numbers */}
          </div>
        ))}
      </div>
      {/* Add rows with a column of numbers */}
      {board.map((row, rowIndex) => (
        <div style={styles.row} key={rowIndex}>
          <div
            style={{
              ...styles.cell,
              color: "white",
              cursor: "default",
              fontWeight: "bold",
              backgroundColor: "#2a6ca2",
            }}
          >
            {rowIndex + 1} {/* Display numbers instead of letters */}
          </div>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              style={{
                color: "white",
                ...styles.cell,
                backgroundColor: cell || "#333",
                border:
                  cell === "X"
                    ? "2px solid red"
                    : cell === "O"
                    ? "2px solid white"
                    : "1px solid #000",
              }}
              onClick={() => onClick && onClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const createEmptyBoard = () =>
  Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => null)
  );

const placeShipsRandomly = (board) => {
  SHIPS.forEach((ship) => {
    let placed = false;
    while (!placed) {
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);
      if (canPlaceShip(board, ship.size, row, col)) {
        placeShip(board, ship.size, row, col, ship.color);
        placed = true;
      }
    }
  });
};

const canPlaceShip = (board, size, row, col) => {
  if (row + size > GRID_SIZE) return false;
  for (let i = 0; i < size; i++) {
    if (board[row + i][col]) return false;
  }
  return true;
};

const placeShip = (board, size, row, col, color) => {
  for (let i = 0; i < size; i++) {
    board[row + i][col] = color;
  }
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2em",
    color: "#333",
    margin: "100px",
  },
  message: {
    fontSize: "1.2em",
    margin: "15px 0",
    color: "#white",
  },
  boardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  board: {
    display: "grid",
    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
    backgroundColor: "#333",
    border: "1px solid #ccc",
    padding: "10px",
  },
  boardLabel: {
    margin: "5px 0",
    fontSize: "1.2em",
    color: "#333",
  },
  row: {
    display: "flex",
  },
  cell: {
    width: "35px",
    height: "35px",
    cursor: "pointer",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",


  },
  startButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Battleship;
