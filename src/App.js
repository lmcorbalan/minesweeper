import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'

import Board from './components/Board';
import Message from './components/Message';
import Button from './components/Button';

import Game from './game';

class App extends Component {
  state = {
    isGameStarted: false
  };

  handleContextMenu = event => {
    event.preventDefault();
    if (this.state.gameState.isOver || this.state.gameState.isWin) {
      return;
    }
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

  handleButtonClick = event => {
    event.preventDefault();
    this.setState({
      isGameStarted: true,
      gameState: Game.newGame(10,10,5)
    });
  }

  render() {
    return (
      <div className="content">
        <Button
          isGameStarted={this.state.isGameStarted}
          handleButtonClick={this.handleButtonClick}
        />
        {this.state.isGameStarted
          ? <React.Fragment>
            <Message data={this.state.gameState}/>
            <Board
              data={this.state.gameState.board}
              handleCellClick={this.handleCellClick}
              handleContextMenu={this.handleContextMenu}
            />
          </React.Fragment>
          : ''
        }
      </div>
    );
  }
}

export default App;
