import React from 'react';
import './Score.css';

const Score = ({score}) => {
    return(
        <div className="score">
            <div className="lit-score">
                Computer
            </div>
            <div className="num-score">
                score
            </div>
        </div>
    );
}

export default Score;