import React from "react";

const Results = ({ winner, votes }) => {
    return (
        <div className="results">
            <h2>Winner</h2>
            <p className=".emoji-item">{winner.symbol}</p>
            <p>Votes: {votes[winner.id]}</p>
        </div>
    );
}

export default Results;