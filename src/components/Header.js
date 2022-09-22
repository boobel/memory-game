import React from "react";
import Score from "./Score";
import "../styles/Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="info">
        <h1>Memory Game</h1>
        <p>
          Get points by trying to click on an image you haven't clicked on
          before
        </p>
      </div>
      <Score score={props.score} bestScore={props.bestScore} />
    </div>
  );
};

export default Header;
