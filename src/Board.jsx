import React, { useState, useEffect } from "react";
import "./style2.css";
import Ships from "./ships";

function Board() {
  const [board, setBoard] = useState(generateEmptyBoard());
  const [ships, setShips] = useState([
    { name: "carrier", size: 5, coordinates: [] },
    { name: "battleship", size: 4, coordinates: [] },
    { name: "cruiser", size: 3, coordinates: [] },
    { name: "submarine", size: 3, coordinates: [] },
    { name: "destroyer", size: 2, coordinates: [] },
  ]);

  // Generate an empty board (10x10)
  function generateEmptyBoard() {
    return Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
  }

  // Randomly place ships on the board
  const placeShipsRandomly = () => {
    let newBoard = generateEmptyBoard();
    let newShips = [...ships];

    // Helper function to randomly place a ship
    const placeShip = (ship) => {
      let placed = false;
      while (!placed) {
        const orientation = Math.random() > 0.5 ? "horizontal" : "vertical";
        const startX = Math.floor(Math.random() * 10);
        const startY = Math.floor(Math.random() * 10);

        // Check if the ship can fit
        const coordinates = [];
        for (let i = 0; i < ship.size; i++) {
          const x = orientation === "horizontal" ? startX + i : startX;
          const y = orientation === "vertical" ? startY + i : startY;
          if (x >= 10 || y >= 10 || newBoard[y][x]) {
            break;
          }
          coordinates.push({ x, y });
        }

        // If the ship fits, place it
        if (coordinates.length === ship.size) {
          coordinates.forEach(({ x, y }) => {
            newBoard[y][x] = ship.name;
          });
          placed = true;
          ship.coordinates = coordinates;
        }
      }
    };

    newShips.forEach(placeShip);
    setBoard(newBoard);
    setShips(newShips);
  };

  // Effect to place ships at random intervals (every 1 second)
  useEffect(() => {
    const intervalId = setInterval(() => {
      placeShipsRandomly();
    }, 1000); // Every 1 second

    // Clean up interval when component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="Section-1">

      <div className="battleship_board2">
        {/* Column Labels (A-J) */}
        <div className="board-header2">
          <div className="cell2 header2"></div>
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map((letter) => (
            <div
              key={letter}
              className="cell header2"
              style={{
                backgroundColor: "#333",
                color: "white", // Change text color to gold, for example
                fontFamily: "ClashDisplay, sans-serif", // Change font
                fontSize: "20px", // Adjust font size
                fontWeight: "600", // Make text bold, if desired
                textAlign: "center", // Center the text within the div
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Rows 1-10 */}
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row2">
            <div
              className="cell header2"
              style={{
                backgroundColor: "#333",
                color: "white", // Change text color to gold, for example
                fontFamily: "ClashDisplay, sans-serif", // Change font
                fontSize: "20px", // Adjust font size
                fontWeight: "600", // Make text bold, if desired
                textAlign: "center", // Center the text within the div

              }}
            >
              {rowIndex + 1}
            </div>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell2 ${cell || ""}`}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: cell ? getShipColor(cell) : "rgb(51, 51, 51)",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}

// Helper to determine the color of the ship
function getShipColor(shipName) {
  switch (shipName) {
    case "carrier":
      return "rgb(30, 144, 255)"; // green
    case "battleship":
      return "rgb(70, 130, 180)";
    case "cruiser":
      return "rgb(100, 149, 237)";
    case "submarine":
      return "rgb(65, 105, 225)"; // brownish
    case "destroyer":
      return "rgb(135, 206, 235)"; // dark red
    default:
      return "white";
  }
}

export default Board;
