import React, { Component } from 'react';
import './App.css';

import Board from '../../Components/Board/Board';
import Score from '../../Components/Score/Score';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> Tic Tac Toe </header>

        <div>
          <Score />
          <Board />
          <Score />
          <button>Next Round</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
