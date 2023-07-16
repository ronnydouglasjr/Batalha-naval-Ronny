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
allocateShips = (shipPositions, initialBoard) => {
  const board = initialBoard;

  for (let [row, column] of shipPositions) {
    if (board[row] && board[row][column]) {
      board[row][column] = "S";
    } else {
      board[row][column] = ".";
    }
  }
  return board;
};

console.log(allocateShips);


// Função para rodar testes checkGuesses
checkGuesses = (guesses, mountedBoard) => {
  const board = mountedBoard; 

  for (let [row, column] of guesses) {
    if (board[row] && board[row][column] === "S") {
      board[row][column] = "X";
    }
  }
  return board;
};

console.log(checkGuesses);

// Função para rodar testes checkWinCondition 

checkWinCondition = (guessedBoard) => {
  for(let row of guessedBoard){
    for(let column of row){
      if(column === "S"){
        return false
      }
    }
  }
  return true
};

