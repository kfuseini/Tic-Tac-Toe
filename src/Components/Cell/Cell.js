import React from 'react';
import './Cell.css';

const Cell = ({value, clicked}) => {
    return(
        <div className="cell" onClick={clicked}>
            {value}
        </div>
    );
}

export default Cell;