import Cell from './Cell';

let board;
let boardRows;
let boardCols;
let mineCount;

let boardState = {};

export default {
  initialize(rows = 4, cols = 4, mines = 2) {
    // will initialize a board for the given rows cols and mines
    board = [];
    boardRows = rows;
    boardCols = cols;
    mineCount = mines;

    for (let row = 0; row < rows; row++) {
      board.push([]);

      for (let col = 0; col < cols; col++) {
        const cell = Cell.create(col, row);
        board[row].push(cell)
      }
    }

    setMines(mines);
    setCellsText();

    boardState = {
      isOver: false,
      isWin: false,
      board: board
    };

    return boardState;
  },
  reveal(row, col) {
    const cell = board[row][col];

    revealCell(cell, false);

    return boardState;
  },

  setFlag(row, col) {
    const cell = board[row][col];

    if (!cell.isRevealed) {
      cell.isFlagged = !cell.isFlagged;
    }

    return boardState;
  }
}

function setMines(mines) {
  let minesPlanted = 0;
  let x;
  let y;

  while (minesPlanted < mines) {
    x = Math.floor((Math.random() * 1000) + 1) % boardCols;
    y = Math.floor((Math.random() * 1000) + 1) % boardRows;

    if (!board[y][x].isMine) {
      board[y][x].isMine = true;
      minesPlanted++;
    }
  }
}

function setCellsText() {
  for (let row = 0; row < boardRows; row++) {
    for (var col = 0; col < boardCols; col++) {
      const cell = board[row][col];
      if (!cell.isMine) {
        const mines = neighbors(cell).filter(neighbor => neighbor.isMine);
        cell.minesArround = mines.length
      }
    }
  }
}

function neighbors(cell) {
  let result = [];

  // up
  if (cell.y > 0) {
    result.push(board[cell.y - 1][cell.x]);
  }
  // down
  if (cell.y < boardRows - 1) {
    result.push(board[cell.y + 1][cell.x]);
  }

  // left
  if (cell.x > 0) {
      result.push(board[cell.y][cell.x - 1]);
  }

  // right
  if (cell.x < boardCols - 1) {
      result.push(board[cell.y][cell.x + 1]);
  }

  // upper left
  if (cell.y > 0 && cell.x > 0)
  {
      result.push(board[cell.y - 1][cell.x - 1]);
  }

  // lower left
  if (cell.y < boardRows - 1 && cell.x > 0) {
      result.push(board[cell.y + 1][cell.x - 1]);
  }

  // upper right
  if (cell.y > 0 && cell.x < boardCols - 1)
  {
      result.push(board[cell.y - 1][cell.x + 1]);
  }

  // lower right
  if (cell.y < boardRows - 1 && cell.x < boardCols - 1)
  {
      result.push(board[cell.y + 1][cell.x + 1]);
  }

  return result;
}

function revealBoard() {
  for (let row = 0; row < boardRows; row++) {
    for (var col = 0; col < boardCols; col++) {
      const cell = board[row][col];
      cell.isRevealed = true;
    }
  }
}

function revealCell(cell, auto) {
  // do not reveal flagged and revealed cell in auto mode
  if (cell.isFlagged || (auto && cell.isRevealed)) { return; }

  if (cell.isMine) {
      boardState.isOver = true;
      revealBoard();
      return;
  } else if (cell.isRevealed && !auto) {
      const cellNeighbors = neighbors(cell);
      const flaggedCells = cellNeighbors.filter(neighbor => {
        return neighbor.isFlagged
      });
      
      if (cell.minesArround === flaggedCells.length) {
          let hiddenCells = neighbors(cell).filter(neighbor => (!neighbor.isRevealed && !neighbor.isFlagged));
          for (let hCell of hiddenCells) {
            revealCell(hCell, true);
          }
      }
  } else {
      cell.isRevealed = true;
      cell.isFlagged = false;

      if (cell.isEmpty()) {
          let cellNeighbors = neighbors(cell)
          for (let neighbor of cellNeighbors) {
            if (neighbor.isEmpty() || !neighbor.isMine) {
              revealCell(neighbor, true);
            }
          }
      }

      if (isGameWon()) {
          boardState.isWin = true;
          return;
      }
  }
}

function isGameWon() {
  let revealedCount = 0;
  for (let row = 0; row < boardRows; row++) {
    for (var col = 0; col < boardCols; col++) {
      const cell = board[row][col];
      if (!cell.isRevealed) {
        revealedCount++;
      }
    }
  }
  return revealedCount === mineCount;
};
