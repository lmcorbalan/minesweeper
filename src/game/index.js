import Board from './Board';

let gameState;

export default {
  newGame(rows = 4, cols = 4, mines  = 2) {
    // will initialize a board for the given rows cols and bombs
    gameState = {
        isOver: false,
        board: Board.initialize(rows, cols, mines)
    };

    return gameState;
  }
}
