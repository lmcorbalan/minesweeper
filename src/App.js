import React, { Component } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'

import Board from './components/Board';

import Game from './game';

let gameState = {
  isOver: false,
  board: [
    [
      {
        isMine: true,
        isFlaged: false,
        isRevealed: false,
        text: ''
      },
      {
        isMine: false,
        isFlaged: false,
        isRevealed: false,
        text: ''
      },
      {
        isMine: false,
        isFlaged: false,
        isRevealed: false,
        text: ''
      }
    ],
    [
      {
        isMine: true,
        isFlaged: false,
        isRevealed: false,
        text: ''
      },
      {
        isMine: false,
        isFlaged: false,
        isRevealed: false,
        text: ''
      },
      {
        isMine: false,
        isFlaged: false,
        isRevealed: false,
        text: ''
      }
    ],
    [
      {
        isMine: true,
        isFlaged: false,
        isRevealed: false,
        text: ''
      },
      {
        isMine: false,
        isFlaged: false,
        isRevealed: false,
        text: ''
      },
      {
        isMine: false,
        isFlaged: false,
        isRevealed: false,
        text: ''
      }
    ]
  ]
};

class App extends Component {
  render() {
    return (
      <div className="content">
        <Board data={gameState.board}/>
      </div>
    );
  }
}

export default App;
