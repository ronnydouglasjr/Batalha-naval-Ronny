// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

// Desenvolva seu código logo abaixo

// Função para rodar testes allocateShips
function allocateShips(shipPositions, initialBoard) {
  const board = initialBoard;

  for (let i = 0; i < shipPositions.length; i++) {
    const [row, column] = shipPositions[i];
    board[row][column] = "S";
  }
  return board;
}
console.log(allocateShips);

// Função para rodar testes checkGuesses
function checkGuesses(guesses, mountedBoard) {
  const board = [];

  for (let i = 0; i < mountedBoard.length; i++) {
    board.push(mountedBoard[i]);
  }

  for (let i = 0; i < guesses.length; i++) {
    const [row, column] = guesses[i];

    if (board[row] && board[row][column] === "S") {
      board[row][column] = "X";
    }
  }
  return board;
}
console.log(checkGuesses);

// Função para rodar testes checkWinCondition

function checkWinCondition(guessedBoard) {
  for (let i = 0; i < guessedBoard.length; i++) {
    const row = guessedBoard[i];
    for (let j = 0; j < row.length; j++) {
      const column = row[j];
      if (column === "S") {
        return false;
      }
    }
  }
  return true;
}

console.log(checkWinCondition);
