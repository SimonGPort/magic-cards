import { useState } from "react";
import DraggableCard from "./DraggableCard";
import PopUp from "./PopUp";

function HandZone() {
  const [Modal, setModal] = useState(undefined);
  const [Cards, setCards] = useState([
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 100,
      posY: 100,
      rotation: 0,
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 300,
      posY: 300,
      rotation: 0,
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

  return (
    <>
      {Modal && <PopUp image={Modal} onClose={() => setModal(undefined)} />}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "50vh",
          backgroundColor: "#f5f0e6", // light beige
          zIndex: 1000,
          borderTop: "1px solid #ccc",
        }}
      >
        {Cards.map((card, id) => {
          return (
            <DraggableCard
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
      </div>
    </>
  );
}

export default HandZone;
