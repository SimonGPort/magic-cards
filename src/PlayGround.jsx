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
      rotation: 0,
      zone: "play",
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 300,
      posY: 300,
      rotation: 0,
      zone: "play",
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 100,
      posY: 550,
      rotation: 0,
      zone: "hand",
    },
  ]);

  const updateCard = (id, x, y, newRotation) => {
    setCards((prevCards) =>
      prevCards.map((card, index) =>
        index === id
          ? { ...card, posX: x, posY: y, rotation: newRotation }
          : card,
      ),
    );
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card, index) => index !== id));
  };

  const changeZone = (id) => {
    setCards((prev) =>
      prev.map((card, index) => {
        if (index !== id) return card;

        const newZone = card.zone === "play" ? "hand" : "play";

        return {
          ...card,
          zone: newZone,
          posY:
            newZone === "hand"
              ? window.innerHeight / 2 + 120
              : window.innerHeight / 3,
        };
      }),
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
        if (card.zone !== "play") return;
        return (
          <DraggableCard
            changeZone={() => changeZone(id)}
            zone={card.zone}
            key={id}
            id={id}
            updateCard={(x, y, newRotation) =>
              updateCard(id, x, y, newRotation)
            }
            deleteCard={() => deleteCard(id)}
            popUp={(image) => setModal(image)}
            imageCardSmall={card.imageCardSmall}
            imageCardNormal={card.imageCardNormal}
            posX={card.posX}
            posY={card.posY}
            rotation={card.rotation}
          />
        );
      })}
      {ShowHand && (
        <>
          <HandZone />
          {Cards.map((card, id) => {
            if (card.zone !== "hand") return;
            return (
              <DraggableCard
                changeZone={() => changeZone(id)}
                zone={card.zone}
                style={{ zIndex: 12 }}
                key={id}
                id={id}
                updateCard={(x, y, newRotation) =>
                  updateCard(id, x, y, newRotation)
                }
                deleteCard={() => deleteCard(id)}
                popUp={(image) => setModal(image)}
                imageCardSmall={card.imageCardSmall}
                imageCardNormal={card.imageCardNormal}
                posX={card.posX}
                posY={card.posY}
                rotation={card.rotation}
              />
            );
          })}
        </>
      )}
    </>
  );
}

export default BattleGround;
