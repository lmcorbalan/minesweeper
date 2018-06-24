
export default {
  create(posX, posY) {
    return {
      x: posX,
      y: posY,
      isMine: false,
      isFlagged: false,
      isQuestion: false,
      isRevealed: false,
      minesArround: 0,
      isEmpty() {
        return this.minesArround === 0;
      }
    };
  }
}
