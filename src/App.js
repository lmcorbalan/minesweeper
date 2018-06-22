import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="board">
          <div className="row">
            <div className="cell">
              <i className="fas fa-flag" />
            </div>
            <div className="cell">
              <i className="fas fa-flag" />
            </div>
            <div className="cell">
              <span>1</span>
            </div>
          </div>
          <div className="row">
            <div className="cell">
            </div>
            <div className="cell">
            </div>
            <div className="cell">
            </div>
          </div>
          <div className="row">
            <div className="cell">
            </div>
            <div className="cell">
            </div>
            <div className="cell">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
