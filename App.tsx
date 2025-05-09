import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

type Player = 'X' | 'O' | null;
type Board = Player[][];

const App: React.FC = () => {
  const initialBoard: Board = Array(3).fill(null).map(() => Array(3).fill(null));
  const [board, setBoard] = useState<Board>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

  const handlePress = (row: number, col: number) => {
    if (board[row][col] !== null) return;

    const newBoard: Board = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? currentPlayer : cell))
    );
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.turnText}>Current Turn: {currentPlayer}</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.cell}
                onPress={() => handlePress(rowIndex, colIndex)}
              >
                <Text style={[styles.cellText, { color: cell === 'X' ? '#ff4c4c' : '#4c8cff' }]}>
                  {cell}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Reset Button */}
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  turnText: {
    fontSize: 20,
    marginBottom: 10,
    color: '#666',
  },
  board: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 8,
    backgroundColor: '#fefefe',
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
