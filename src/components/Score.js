import React from "react";

const Score = (props) => {
  return (
    <div>
      <p>Current Score: {props.score}</p>
      <p>Best Score:{props.bestScore}</p>
    </div>
  );
};

export default Score;
