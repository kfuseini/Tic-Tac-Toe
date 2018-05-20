import React, { Component } from 'react';
import './App.css';

// import Board from '../../Components/Board/Board';
import Score from '../../Components/Score/Score';
import Cell from '../../Components/Cell/Cell';

let initialState = {
  boardItems: [['','',''],['','',''],['','','']],
  computerScore: 0,
  playerScore: 0,
  turn: 'computer',
  reset: false,
  nextRound: false,
  winner: '',
  winPossibilities:[[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6],]
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onNextRound = () => {
    this.setState({
      boardItems: [['','',''],['','',''],['','','']],
      turn: 'computer',
      winner: '',
    })
  }

  onReset = () => {
    this.setState({
      boardItems: [['','',''],['','',''],['','','']],
      computerScore: 0,
      playerScore: 0,
      turn: 'computer',
      reset: false,
      nextRound: false,
      winner: '',
    });
  }

  getLocation = (id) => {
    const first = Math.floor(Number(id)/3);
    const second = Math.floor(Number(id)%3);
    return [first, second];
  }

  onCellClick = (event) => {
    if(!this.state.winner){
      let board = this.state.boardItems;
      if (!event.target.innerHTML) {
          if (this.state.turn === 'computer') {
              const text = document.createTextNode('O');
              event.target.append(text);
              const location = this.getLocation(event.target.getAttribute('id'));
              board[location[0]][location[1]] = 'O';
              this.setState({turn: 'player'});
          } else {
              const text = document.createTextNode('X');
              event.target.append(text);
              const location = this.getLocation(event.target.getAttribute('id'));
              board[location[0]][location[1]] = 'X';
              this.setState({turn: 'computer'});
          }
      }
      console.log(this.checkWin());
    }
  }

  buildBoard = () => {
    return (<div className="Board">
                  <div className="row">
                  { this.state.boardItems[0].map((arr, index) =>{
                      return (<Cell key={index} id={index} value={arr[0]} clicked={ this.onCellClick }/>)
                  })}
                  </div>
                  <div className="row">
                  { this.state.boardItems[1].map((arr, index) =>{
                      return (<Cell key={index+3} id={index+3} value={arr[0]} clicked={ this.onCellClick }/>)
                  })}
                  </div>
                  <div className="row">
                  { this.state.boardItems[2].map((arr, index) =>{
                      return (<Cell key={index+6} id={index+6} value={arr[0]} clicked={ this.onCellClick }/>)
                  })}
                  </div>
              </div>);
  }

  checkWin = () => {
    const board = this.state.boardItems.reduce((prev, curr) => {
      return prev.concat(curr);
    });
    let num = 0;
    board.forEach(el=>{
      if(el) {
        ++num;
      }
    })

    if (num > 4){
      console.log(num);
      let winner = '';
      this.state.winPossibilities.forEach(arr => {
        if (board[arr[0]] === 'O' && board[arr[1]] === 'O' && board[arr[2]] === 'O') {
          winner = 'Computer';
          this.setState((prevState) => {
            return {computerScore: prevState.computerScore + 1};
          });

        } else if (board[arr[0]] === 'X' && board[arr[1]] === 'X' && board[arr[2]] === 'X') {
          winner = 'Player1';
          this.setState((prevState) => {
            return {playerScore: prevState.playerScore + 1};
          });
        } else {
          if (num === 9) {
            winner =  'Draw';
          }
        }
      });
      this.setState({winner: winner});
      return winner;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          Tic Tac Toe 
        </header>

          <div className="App-body">
            <Score who='computer' score={this.state.computerScore}/>
            <div id="board-buttons">
              { this.buildBoard() }
              <div className="buttons">
                <button id="next-round" onClick={this.onNextRound}>Next Round</button>
                <button id="reset" onClick={this.onReset}>Reset</button>
              </div>
            </div>
            <Score who='player1' score={this.state.playerScore}/>
          </div>
      </div>
    );
  }
}

export default App;
