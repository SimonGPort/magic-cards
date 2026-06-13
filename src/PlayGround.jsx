import { useState } from "react";
import DraggableCard from "./DraggableCard";
import "./App.css";

function BattleGround() {
  const imageTest =
    "https://cards.scryfall.io/small/front/9/4/942cf220-472c-48f6-8f60-993939ea5ab8.jpg?1562055436";
  return (
    <>
      <div>BattleGround</div>
      <DraggableCard imageCardSmall={imageTest} />
    </>
  );
}

export default BattleGround;
