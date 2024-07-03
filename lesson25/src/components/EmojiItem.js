import React from "react";

const EmojiItem = ({ emoji, votes, onVote}) => {
    return (
      <div className="emoji-item" onClick={() => onVote(emoji.id)}>
          <span>{emoji.symbol}</span>
          <div>{votes || 0}</div>
      </div>
    );
}

export default EmojiItem;