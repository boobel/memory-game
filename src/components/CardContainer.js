//import cards from "../utils/cards";
import Card from "./Card";
import "../styles/Cards.css";
import fish from "../utils/fish.png";
import fish2 from "../utils/fish2.png";
import crab from "../utils/crab.png";
import squid from "../utils/squid.png";
import steak from "../utils/steak.png";
import bread from "../utils/bread.png";

import { useEffect, useState } from "react";
const CardContainer = (props) => {
  let cards = [
    {
      title: "Shrimp",
      img: fish,
    },
    {
      title: "Fish",
      img: fish2,
    },
    {
      title: "Crab",
      img: crab,
    },
    {
      title: "Squid",
      img: squid,
    },
    {
      title: "Steak",
      img: steak,
    },
    {
      title: "Bread",
      img: bread,
    },
  ];
  const [newCards, setNewCards] = useState(cards);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const nnewCards = [...newCards];
    shuffle(nnewCards);
    setNewCards(nnewCards);
  }, [props.score, props.bestScore]);

  return (
    <div className="cards">
      {newCards.map((card) => {
        return (
          <Card
            title={card.title}
            img={card.img}
            handleGameLogic={props.handleGameLogic}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
