import React, { Component } from 'react';
import './App.css';

import Board from '../../Components/Board/Board';
import Score from '../../Components/Score/Score';

const initialState = {
  boardItems: [['','',''],['','',''],['','','']],
  computerScore: '',
  playerScore: '',
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onNextRound = () => {
    this.setState(initialState)
  }

  onReset = () => {
    this.setState(initialState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          Tic Tac Toe 
        </header>

          <div className="App-body">
            <Score />
            <div id="board-buttons">
              <Board boardItems={this.state.boardItems} onreset={this.onReset}/>
              <div className="buttons">
                <button id="next-round" >Next Round</button>
                <button id="reset" onClick={this.onReset}>Reset</button>
              </div>
            </div>
            <Score />
          </div>
      </div>
    );
  }
}

export default App;
