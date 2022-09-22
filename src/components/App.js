import { useState } from "react";
import "../styles/App.css";
import CardContainer from "./CardContainer";
import Footer from "./footer";
import Header from "./Header";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);
  const [cardsArr, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleBestScore = () => {
    setbestScore(score);
  };

  const handleCard = (card) => {
    addCard((prevArr) => [...prevArr, card]);
  };

  const handleGameRestart = () => {
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (card) => {
    console.log(cardsArr);
    console.log(bestScore);
    if (score >= 6) {
      alert("You win!");
      handleGameRestart();
    }
    if (!cardsArr.includes(card)) {
      handleCard(card);
      handleScore();
    } else {
      handleBestScore();
      handleGameRestart();
    }
  };

  return (
    <div className="App">
      <script
        src="https://kit.fontawesome.com/c77c3bbfc6.js"
        crossOrigin="anonymous"
      ></script>
      <Header score={score} bestScore={bestScore} />
      <CardContainer
        score={score}
        bestScore={bestScore}
        handleGameLogic={handleGameLogic}
      />
      <Footer />
    </div>
  );
};

export default App;
