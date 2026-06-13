import { useState } from "react";
import DraggableCard from "./DraggableCard";

function HandZone() {
  const imageTestSmall =
    "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838";

  const imageTestNormal =
    "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838";

  return (
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
      {" "}
      <DraggableCard
        popUp={(image) => {
          setModal(image);
        }}
        imageCardSmall={imageTestSmall}
        imageCardNormal={imageTestNormal}
        startX={100}
        startY={100}
      />
    </div>
  );
}

export default HandZone;
