import { useState } from "react";
import DraggableCard from "./DraggableCard";
import PopUp from "./PopUp";
import HandZone from "./HandZone";
import "./App.css";

function BattleGround({ deck, setDeck, cards, setCards }) {
  const [Modal, setModal] = useState(undefined);
  const [ShowHand, setShowHand] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(1);

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

  const draw = () => {
    const cardToDraw = deck.find((card) => card.player === playerTurn);

    if (!cardToDraw) return;

    setDeck((prevDeck) => {
      const index = prevDeck.findIndex((card) => card.player === playerTurn);

      return prevDeck.filter((_, i) => i !== index);
    });

    setCards((prevCards) => [...prevCards, cardToDraw]);
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
          border: "2px solid black",
          cursor: "pointer",
          zIndex: 9998,
        }}
      />
      <div
        onClick={() => {
          setShowHand(false);
          if (playerTurn === 1) setPlayerTurn(2);
          else setPlayerTurn(1);
        }}
        style={{
          cursor: "pointer",
          position: "fixed",
          top: 20,
          right: 20,
          width: 50,
          height: 50,
          backgroundColor: "yellow",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "bold",
          border: "2px solid black",
          borderRadius: "4px",
          zIndex: 9998,
        }}
      >
        {playerTurn}
      </div>
      <div
        onClick={() => {
          draw();
        }}
        style={{
          cursor: "pointer",
          position: "fixed",
          top: 20,
          right: 150,
          width: 50,
          height: 50,
          backgroundColor: "yellow",
          backgroundImage: "url('/card.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "2px solid black",
          zIndex: 9998,
        }}
      />
      {cards.map((card, id) => {
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
            imageSmall={card.imageSmall}
            imageNormal={card.imageNormal}
            posX={card.posX}
            posY={card.posY}
            rotation={card.rotation}
          />
        );
      })}
      {ShowHand && (
        <>
          <HandZone />
          {cards.map((card, id) => {
            if (card.zone !== "hand") return;
            if (card.player !== playerTurn) return;
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
                imageSmall={card.imageSmall}
                imageNormal={card.imageNormal}
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
