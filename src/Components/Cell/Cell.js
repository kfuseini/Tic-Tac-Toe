import React from 'react';
import './Cell.css';

const Cell = ({value, clicked, id}) => {
    return(
        <div className="cell" onClick={clicked} id={id}>
            {value}
        </div>
    );
}

export default Cell;