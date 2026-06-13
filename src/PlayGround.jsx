import { useState } from "react";
import DraggableCard from "./DraggableCard";
import PopUp from "./PopUp";
import "./App.css";

function BattleGround() {
  const [Modal, setModal] = useState(undefined);

  const imageTestSmall =
    "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838";

  const imageTestNormal =
    "https://cards.scryfall.io/normal/front/9/4/942cf220-472c-48f6-8f60-993939ea5ab8.jpg?1562055436";

  return (
    <>
      {Modal && <PopUp image={Modal} onClose={() => setModal(undefined)} />}
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
    </>
  );
}

export default BattleGround;
