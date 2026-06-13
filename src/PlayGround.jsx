import { useState } from "react";
import DraggableCard from "./DraggableCard";
import PopUp from "./PopUp";
import HandZone from "./HandZone";
import "./App.css";

function BattleGround() {
  const [Modal, setModal] = useState(undefined);
  const [showHand, setShowHand] = useState(false);

  const imageTestSmall =
    "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838";

  const imageTestNormal =
    "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838";

  return (
    <>
      {Modal && <PopUp image={Modal} onClose={() => setModal(undefined)} />}
      <div
        onClick={() => setShowHand(!showHand)}
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
      <DraggableCard
        popUp={(image) => {
          setModal(image);
        }}
        imageCardSmall={imageTestSmall}
        imageCardNormal={imageTestNormal}
        startX={100}
        startY={100}
      />
      <DraggableCard
        popUp={(image) => {
          setModal(image);
        }}
        imageCardSmall={imageTestSmall}
        imageCardNormal={imageTestNormal}
        startX={300}
        startY={300}
      />
      {showHand && <HandZone />}
    </>
  );
}

export default BattleGround;
