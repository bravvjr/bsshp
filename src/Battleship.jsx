import React, { useState, useEffect } from "react";
import Confetti from "react-confetti"; // Import the Confetti component

const GRID_SIZE = 10;
const SHIPS = [
  { name: "Carrier", size: 5, color: "#1E90FF" },
  { name: "Battleship", size: 4, color: "#4682b4" },
  { name: "Cruiser", size: 3, color: "#6495ed" },
  { name: "Submarine", size: 3, color: "#4169e1" },
  { name: "Destroyer", size: 2, color: "#87ceeb" },
];

const createEmptyBoard = () =>
  Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => null)
  );

const canPlaceShip = (board, size, row, col, isVertical) => {
  if (isVertical) {
    if (row + size > GRID_SIZE) return false;
    for (let i = 0; i < size; i++) {
      if (board[row + i][col]) return false;
    }
  } else {
    if (col + size > GRID_SIZE) return false;
    for (let i = 0; i < size; i++) {
      if (board[row][col + i]) return false;
    }
  }
  return true;
};

const placeShip = (board, size, row, col, color, isVertical) => {
  if (isVertical) {
    for (let i = 0; i < size; i++) {
      board[row + i][col] = color;
    }
  } else {
    for (let i = 0; i < size; i++) {
      board[row][col + i] = color;
    }
  }
};

const placeShipsRandomly = (board) => {
  SHIPS.forEach((ship) => {
    let placed = false;
    while (!placed) {
      const isVertical = Math.random() > 0.5;
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);
      if (canPlaceShip(board, ship.size, row, col, isVertical)) {
        placeShip(board, ship.size, row, col, ship.color, isVertical);
        placed = true;
      }
    }
  });
};

const checkGameOver = (board) => {
  return SHIPS.every((ship) => {
    return board.flat().filter(cell => cell === ship.color).length === 0;
  });
};

const Battleship = () => {
  const [player1Board, setPlayer1Board] = useState(createEmptyBoard());
  const [player2Board, setPlayer2Board] = useState(createEmptyBoard());
  const [player2Ships, setPlayer2Ships] = useState([]);
  const [isPlacingShips, setIsPlacingShips] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentTurn, setCurrentTurn] = useState("Player 2");
  const [message, setMessage] = useState("Place your ships!");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(""); // Track the winner
  const [isVertical, setIsVertical] = useState(true); // New state to toggle between vertical and horizontal
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const board = createEmptyBoard();
    placeShipsRandomly(board);
    setPlayer1Board(board);
    // Update window size on resize for confetti
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      if (canPlaceShip(boardCopy, currentShip.size, row, col, isVertical)) {
        placeShip(boardCopy, currentShip.size, row, col, currentShip.color, isVertical);
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
    if (!gameStarted || currentTurn !== "Player 2" || gameOver) return;
    const boardCopy = [...player1Board];
    if (boardCopy[row][col] === "X" || boardCopy[row][col] === "O") {
      setMessage("You've already attacked this spot.");
      return;
    }
    if (boardCopy[row][col]) {
      boardCopy[row][col] = "X"; // mark as a hit
      setMessage("Player 2 hits!");
      if (checkGameOver(boardCopy)) {
        setGameOver(true);
        setWinner("Player 2");
        setMessage("GAME OVER! Player 2 Wins!");
      }
    } else {
      boardCopy[row][col] = "O"; // mark as a miss
      setMessage("Player 2 misses!");
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
      setMessage("Player 1 hits!");
      if (checkGameOver(boardCopy)) {
        setGameOver(true);
        setWinner("Player 1");
        setMessage("GAME OVER! Player 1 Wins!");
      }
    } else {
      boardCopy[row][col] = "O";
      setMessage("Player 1 misses!");
    }

    setPlayer2Board(boardCopy);
    setCurrentTurn("Player 2");
  };

  return (
    <div style={styles.container}>
      {gameOver && <Confetti width={windowWidth} height={windowHeight} />}
      <p style={styles.message}>{message}</p>
      <div style={styles.boardsWrapper}>
        <Board
          board={player1Board}
          label="Player 1"
          onClick={gameStarted ? null : undefined}
        />
        <Board
          board={player2Board}
          label="Player 2"
          onClick={isPlacingShips ? handlePlayer2Click : handleGameClick}
        />
      </div>
      {isPlacingShips && (
        <div>
          <button onClick={handleStartGame} style={styles.startButton}>
            Start Game
          </button>
          <div>
            <button
              onClick={() => setIsVertical(true)}
              style={styles.startButton}
            >
              Vertical Placement
            </button>
            <button
              onClick={() => setIsVertical(false)}
              style={styles.startButton}
            >
              Horizontal Placement
            </button>
          </div>
        </div>
      )}
      {gameOver && (
        <div style={styles.gameOverMessage}>
          GAME OVER! {winner} Wins!
        </div>
      )}
    </div>
  );
};

const Board = ({ board, label, onClick }) => (
  <div style={styles.singleBoardContainer}>
    <h2 style={styles.boardLabel}>{label}</h2>
    <div>
      <div style={styles.row}>
        <div style={{ ...styles.cell, cursor: "default" }}></div>
        {Array.from({ length: GRID_SIZE }, (_, colIndex) => (
          <div
            key={`header-${colIndex}`}
            style={{ ...styles.cell, cursor: "default", fontWeight: "bold" }}
          >
            {String.fromCharCode(65 + colIndex)}
          </div>
        ))}
      </div>
      {board.map((row, rowIndex) => (
        <div style={styles.row} key={rowIndex}>
          <div
            style={{
              ...styles.cell,
              cursor: "default",
              fontWeight: "bold",
              backgroundColor: "#ADD8E6",
            }}
          >
            {rowIndex + 1}
          </div>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              style={{
                ...styles.cell,
                backgroundColor:
                  cell === "X"
                    ? "#ff4500"
                    : cell === "O"
                    ? "#ffffff"
                    : cell || "#333",
                border:
                  cell === "X"
                    ? "2px solid red"
                    : cell === "O"
                    ? "2px solid gray"
                    : "1px solid #000",
                position: "relative",
              }}
              onClick={() => onClick && onClick(rowIndex, colIndex)}
            >
              {cell === "X" && (
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px 2px rgba(255, 69, 0, 0.7)",
                  }}
                />
              )}
              {cell === "O" && (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    boxShadow: "0 0 5px 1px rgba(255, 255, 255, 0.7)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2em",
    color: "#333",
    margin: "20px",
  },
  message: {
    fontSize: "1.2em",
    margin: "15px 0",
    color: "#666",
  },
  boardsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginTop: "20px",
  },
  singleBoardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  boardLabel: {
    margin: "10px 0",
    fontSize: "1.2em",
    color: "#333",
  },
  row: {
    display: "flex",
  },
  cell: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    border: "1px solid #000",
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
  gameOverMessage: {
    fontSize: "3em",
    fontWeight: "bold",
    color: "#ff0000",
    marginTop: "30px",
    textAlign: "center",
  },
};

export default Battleship;