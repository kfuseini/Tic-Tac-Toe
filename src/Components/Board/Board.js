import React from 'react';
import './Board.css';

import Cell from '../Cell/Cell';

const Board = (props) => {
    return(
        <div className="Board">
            <div className="row">
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="row">
                <Cell />
                <Cell />
                <Cell />
            </div>
            <div className="row">
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    );
}

export default Board;