import React from 'react';
import './Score.css';

const Score = ({who, score}) => {
    return(
        <div className="score">
            <div className="lit-score">
                { who }
            </div>
            <div className="num-score">
                { score }
            </div>
        </div>
    );
}

export default Score;