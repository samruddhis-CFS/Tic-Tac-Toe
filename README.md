Tic-Tac-Toe App (React Native)
This project is a simple, interactive Tic Tac Toe game built using React Native. It allows two players to take turns marking X and O in a 3x3 grid. The app features smooth UI components and basic game logic, making it a great starting point for understanding React Native concepts.

 Features
 Interactive 3x3 game board

 Alternating turns between Player X and Player O

 "Reset Game" button to clear the board and start over

 Simple and clean UI with responsive touch controls

🛠 Technologies Used
React Native for cross-platform mobile development

TypeScript for type safety and better code clarity

Functional Components and Hooks (useState) for state management

TouchableOpacity and SafeAreaView from React Native core for UI layout and interaction

 Code Breakdown
 App Component
State Variables:

board: A 3x3 array representing the game grid.

currentPlayer: Tracks which player's turn it is (X or O).

Functions:

handlePress(row, col): Updates the board if the tapped cell is empty, and switches the player.

resetGame(): Clears the board and resets the player to X.

UI Structure:

A title (Tic Tac Toe) and current player's turn display.

A 3x3 grid built using map() loops and TouchableOpacity for each cell.

A reset button styled with StyleSheet to restart the game.

 How It Works
When a player taps a cell, the handlePress function updates that cell with X or O.

The app automatically switches turns after each move.

The Reset Game button clears the board and starts a new game with Player X.
