import cards from "../utils/cards";
import Card from "./Card";
import "../styles/Cards.css";
import { useEffect, useState } from "react";
const CardContainer = (props) => {
  const [newCards, setNewCards] = useState(cards);
  const shuffle = (arr) => {
    arr.sort((a, b) => Math.random() - 0.5);
    return arr;
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [props.score]);

  return (
    <div className="cards">
      {cards.map((card) => {
        return <Card title={card.title} />;
      })}
    </div>
  );
};

export default CardContainer;
