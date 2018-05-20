import React, { Component } from 'react';
import './Board.css';

import Cell from '../Cell/Cell';

const initialState = {
    turn: 'computer',
}

class Board extends Component {
    
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onCellClick = (event) => {
        console.log(event.target);
        if (!event.target.innerHTML) {
            if (this.state.turn === 'computer') {
                const text = document.createTextNode('O');
                event.target.append(text);
                this.setState({turn: 'player'});
            } else {
                const text = document.createTextNode('X');
                event.target.append(text);
                this.setState({turn: 'computer'});
            }
        }
    }

    render() {
        
        const { boardItems } = this.props;
        return(
            <div className="Board">
                <div className="row">
                { boardItems[0].map((arr, index) =>{
                    return (<Cell key={index} value={arr[0]} clicked={ this.onCellClick }/>)
                })}
                </div>
                <div className="row">
                { boardItems[1].map((arr, index) =>{
                    return (<Cell key={index+3} value={arr[0]} clicked={ this.onCellClick }/>)
                })}
                </div>
                <div className="row">
                { boardItems[2].map((arr, index) =>{
                    return (<Cell key={index+6} value={arr[0]} clicked={ this.onCellClick }/>)
                })}
                </div>
            </div>
        );
    }
}

export default Board;