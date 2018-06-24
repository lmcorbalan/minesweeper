import Cell from './Cell';

let boardState;
let boardRows;
let boardCols;

export default {
  initialize(rows = 4, cols = 4, mines = 2) {
    // will initialize a board for the given rows cols and mines
    boardState = [];
    boardRows = rows;
    boardCols = cols;

    for (let row = 0; row < rows; row++) {
      boardState.push([]);

      for (let col = 0; col < cols; col++) {
        const cell = Cell.create(col, row);
        boardState[row].push(cell)
      }
    }

    setMines(mines);
    setCellsText();

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

    if (!boardState[y][x].isMine) {
      boardState[y][x].isMine = true;
      minesPlanted++;
    }
  }
}

function setCellsText() {
  for (let row = 0; row < boardRows; row++) {
    for (var col = 0; col < boardCols; col++) {
      const cell = boardState[row][col];
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
    result.push(boardState[cell.y - 1][cell.x]);
  }
  // down
  if (cell.y < boardRows - 1) {
    result.push(boardState[cell.y + 1][cell.x]);
  }

  // left
  if (cell.x > 0) {
      result.push(boardState[cell.y][cell.x - 1]);
  }

  // right
  if (cell.x < boardCols - 1) {
      result.push(boardState[cell.y][cell.x + 1]);
  }

  // upper left
  if (cell.y > 0 && cell.x > 0)
  {
      result.push(boardState[cell.y - 1][cell.x - 1]);
  }

  // lower left
  if (cell.y < boardRows - 1 && cell.x > 0) {
      result.push(boardState[cell.y + 1][cell.x - 1]);
  }

  // upper right
  if (cell.y > 0 && cell.x < boardCols - 1)
  {
      result.push(boardState[cell.y - 1][cell.x + 1]);
  }

  // lower right
  if (cell.y < boardRows - 1 && cell.x < boardCols - 1)
  {
      result.push(boardState[cell.y + 1][cell.x + 1]);
  }

  return result;
}
