const gameboard = document.querySelector('#gameboard')
const boardCell = document.querySelectorAll ('.boardCell')
let turn = 0 // Keeps track if X or O player's turn
const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  