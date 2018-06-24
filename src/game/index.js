import Board from './Board';

let gameState;

export default {
  newGame(rows = 4, cols = 4, mines  = 2) {
    // will initialize a board for the given rows cols and bombs
    gameState = Board.initialize(rows, cols, mines);

    return gameState;
  },

  reveal(row, col) {
    return Board.reveal(row, col);
  },

  setFlag(row, col) {
    return Board.setFlag(row, col);
  }
}
