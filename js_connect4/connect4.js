// Constants
let board = [];
// Cached Elements
const error = document.querySelector(".error");
const gameBoard = document.querySelector(".gameBoard");
const tiles = document.querySelector(".gameboard div");
const result = document.querySelector("#result");
const currentPlayerDisplay = document.querySelector("#current-player");
const reset = document.querySelector("#reset");
let currentPlayer = 1;
const winner = document.querySelector("#winner");
const winningArrays = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
];

// Event Listener
gameBoard.addEventListener("click", rectify);

// Functions

function initialize() {
  buildBoard();
  currentPlayerDisplay.textContent = currentPlayer;
}

function buildBoard() {
  for (let i = 0; i < 42; i++) {
    let tile = document.createElement("div");
    tile.id = i;
    tile.setAttribute("class", "tile");
    tile.classList.add("grid-item");
    board.push(0);
    gameBoard.appendChild(tile);
  }
}

function rectify(e) {
  let link = e.target;
  if (link.classList.contains("tile")) {
    if (currentPlayer === 1) {
      link.classList.remove("tile");
      link.classList.add("played");
      currentPlayer = 2;
      currentPlayerDisplay.innerHTML = currentPlayer;
      board[link.id] = 1;
      error.innerHTML = " ";
    } else if (currentPlayer === 2) {
      link.classList.remove("tile");
      link.classList.add("played");
      currentPlayer = 1;
      currentPlayerDisplay.innerHTML = currentPlayer;
      board[link.id] = -1;
      error.innerHTML = " ";
    }
  } else if (link.classList.contains("played")) {
    error.innerHTML = "What makes you think you can click there?";
  }

  for (let i = 0; i < board.length; i++) {
    if (board[link.id] === 1) {
      link.classList.add("p1");
    } else if (board[link.id] === -1) {
      link.classList.add("p2");
    } else if (board[link.id] === 0) {
      link.style.background = "white";
    }
  }
  checkWinner()
}

function checkWinner() {
  for (let i = 0; i < winningArrays.length; i++) {
    for (let x = 0; x < winningArrays[i].length; x++) {
      if (
        board[winningArrays[i][x]] +
          board[winningArrays[i][x + 1]] +
          board[winningArrays[i][x + 2]] +
          board[winningArrays[i][x + 3]] ===
        4
      ) {
        winner.innerHTML = "Player 1 Wins!";
      } else if (
        board[winningArrays[i][x]] +
          board[winningArrays[i][x + 1]] +
          board[winningArrays[i][x + 2]] +
          board[winningArrays[i][x + 3]] ===
        -4
      ) {
        winner.innerHTML = "Player 2 Wins!";
      }
    }
  }
}

initialize();
