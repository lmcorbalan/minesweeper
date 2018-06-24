import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'

import Board from './components/Board';
import Message from './components/Message';

import Game from './game';

class App extends Component {
  state = {
    gameState: Game.newGame()
  };

  handleContextMenu = event => {
    event.preventDefault();
    const col = event.target.dataset.col;
    const row = event.target.dataset.row;

    const gameState = Game.setFlag(row, col);

    this.setState({
      gameState: gameState
    });
  }

  handleCellClick = event => {
      event.preventDefault();
      if (this.state.gameState.isOver || this.state.gameState.isWin) {
        return;
      }

      const col = event.target.dataset.col;
      const row = event.target.dataset.row;

      const gameState = Game.reveal(row, col);

      this.setState({
        gameState: gameState
      });
  }

  render() {
    return (
      <div className="content">
        <Message data={this.state.gameState}/>
        <Board
          data={this.state.gameState.board}
          handleCellClick={this.handleCellClick}
          handleContextMenu={this.handleContextMenu}
        />
      </div>
    );
  }
}

export default App;
