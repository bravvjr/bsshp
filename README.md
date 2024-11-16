# Battleship Game

Welcome to the Battleship Game! This is a browser-based implementation of the classic two-player strategy game, *Battleship*. The game allows two players to take turns attacking each other's ships on a grid and aims to sink all the opponent's ships to win.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Game Instructions](#game-instructions)
- [Game Rules](#game-rules)
- [Future Enhancements](#future-enhancements)

## Project Overview

This Battleship game is implemented using **React.js** for building the user interface. Players can place their ships randomly on a 10x10 grid and then take turns attacking their opponent’s grid. The game ends when all ships of one player are sunk.

## Features

- **Ship Placement**: Players can place their ships either vertically or horizontally on the grid.
- **Game Start**: Once all ships are placed, the game starts, and players take turns attacking.
- **Hit and Miss**: When a player attacks a grid cell, it will either register as a hit (if there is a ship) or a miss (if no ship is there).
- **Game Over**: The game ends when one player has sunk all of the opponent's ships. A "GAME OVER" message displays the winner, and confetti is shown for a fun celebration.
- **Responsive Design**: The game is responsive and works on both desktop and mobile devices.

# Live Link
https://battleshiptp.netlify.app/

## Technologies Used

- **React.js**: Used for building the interactive user interface.
- **Confetti**: A fun confetti effect triggered when the game ends.
- **CSS**: Basic styling for the layout and game interface.
- **JavaScript**: Game logic for ship placement, attack detection, and game flow.

## Getting Started

Follow these steps to run the game on your local machine.

### Prerequisites

Ensure that you have **Node.js** and **npm** installed on your computer. You can check if they are installed by running the following commands:

```bash
node -v
npm -v
```

If not installed, download and install from the official [Node.js website](https://nodejs.org/en)

### Clone the repository
Start by cloning this repository to your local machine:

```
git clone https://github.com/yourusername/battleship-game.git
cd battleship-game
```
### Install dependencies
Once inside the project directory, install the required dependencies:
```npm install
```
### Run the game
To start the game, run the following command:
```npm start
```
This will launch the application in your browser, and you should be able to start playing!

## Game Instructions
### 1. Place your ships:

Each player gets 5 ships of varying sizes: Carrier (5 cells), Battleship (4 cells), Cruiser (3 cells), Submarine (3 cells), and Destroyer (2 cells).
Ships can be placed either horizontally or vertically.
Once all ships are placed, click "Start Game" to begin the battle.
### 2. Take turns attacking:

Player 2 will start by clicking on Player 1's grid to attack a random spot.
If a player hits a ship, the spot will turn red. If they miss, the spot will turn white.
Continue alternating turns until one player sinks all the ships of the opponent.
### 3. Winning the game:

The game ends when one player sinks all of the opponent’s ships. A "GAME OVER" message will display with the winner, and confetti will be shown for celebration.
## Game Rules
Grid size: 10x10 grid for each player.
Ships: There are 5 ships in total, each with a different size:
Carrier: 5 cells
Battleship: 4 cells
Cruiser: 3 cells
Submarine: 3 cells
Destroyer: 2 cells
Turns: Players alternate attacking until all of one player’s ships are sunk.
Victory Condition: The first player to sink all the opponent's ships wins.
## Future Enhancements
Multiplayer: Implement online multiplayer mode to allow players to compete over the internet.
AI Opponent: Add a bot opponent for single-player mode.
Custom Ship Sizes: Allow players to customize their ships and grid size.
Leaderboard: Integrate a leaderboard to track high scores and game statistics.
## License
This project is licensed under the MIT License - see the LICENSE file for details.


