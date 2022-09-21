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
    setbestScore(0);
    addCard([]);
  };

  const handleGameLogic = (card) => {
    if (!cardsArr.includes()) {
      handleCard(card);
      handleScore();
    } else {
      handleBestScore();
      handleGameRestart();
    }
  };

  return (
    <div className="App">
      <Header />
      <CardContainer score={score} handleGameLogic={handleGameLogic} />
      <Footer />
    </div>
  );
};

export default App;
