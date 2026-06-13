import { useState } from "react";
import DraggableCard from "./DraggableCard";
import PopUp from "./PopUp";
import HandZone from "./HandZone";
import "./App.css";

function BattleGround() {
  const [Modal, setModal] = useState(undefined);
  const [ShowHand, setShowHand] = useState(false);
  const [Cards, setCards] = useState([
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 100,
      posY: 100,
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 300,
      posY: 300,
    },
  ]);

  const updateCard = (id, x, y) => {
    setCards((prevCards) =>
      prevCards.map((card, index) =>
        index === id ? { ...card, posX: x, posY: y } : card,
      ),
    );
  };

  return (
    <>
      {Modal && <PopUp image={Modal} onClose={() => setModal(undefined)} />}
      <div
        onClick={() => setShowHand(!ShowHand)}
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          width: 50,
          height: 50,
          backgroundColor: "yellow",
          backgroundImage: "url('/hand.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          cursor: "pointer",
          zIndex: 9998,
        }}
      />
      {Cards.map((card, id) => {
        return (
          <DraggableCard
            id={id}
            updateCard={(x, y) => updateCard(id, x, y)}
            popUp={(image) => setModal(image)}
            imageCardSmall={card.imageCardSmall}
            imageCardNormal={card.imageCardNormal}
            posX={card.posX}
            posY={card.posY}
          />
        );
      })}
      {ShowHand && <HandZone />}
    </>
  );
}

export default BattleGround;
