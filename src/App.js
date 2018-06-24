import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'

import Board from './components/Board';

import Game from './game';

class App extends Component {
  state = {
    gameState: Game.newGame()
  };

  handleCellClick = event => {
      event.preventDefault();
      const col = event.target.dataset.col;
      const row = event.target.dataset.row;

      console.log(event.target)
      console.log(row, col)

      const gameState = Game.reveal(row, col);

      this.setState({
        gameState: gameState
      });
  }

  render() {
    return (
      <div className="content">
        <Board
          data={this.state.gameState.board}
          handleCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}

export default App;
