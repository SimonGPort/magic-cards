import { useState, useEffect } from "react";

export default function DraggableCard({
  zone,
  changeZone,
  deleteCard,
  rotation,
  id,
  imageCardSmall,
  imageCardNormal,
  posX,
  posY,
  popUp,
  updateCard,
}) {
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      if (!dragging) return;

      updateCard(e.clientX - offset.x, e.clientY - offset.y);
    };

    const handleUp = () => {
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [dragging, offset.x, offset.y, id, updateCard]);

  const rotateCard = () => {
    switch (rotation) {
      case 0:
        updateCard(posX, posY, 90);
        break;
      case 90:
        updateCard(posX, posY, 180);
        break;
      case 180:
        updateCard(posX, posY, 270);
        break;
      case 270:
        updateCard(posX, posY, 0);
        break;
      default:
        updateCard(posX, posY, 0);
    }
  };

  const unTap = () => {
    updateCard(posX, posY, 0);
  };

  const handleMouseDown = (e) => {
    setDragging(true);

    setOffset({
      x: e.clientX - posX,
      y: e.clientY - posY,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: posX,
          top: posY,
          cursor: dragging ? "grabbing" : "grab",
          transform: `rotate(${rotation}deg)`,
          zIndex: dragging ? 999 : zone === "play" ? 1 : 12,
        }}
      >
        {/* DRAG AREA */}
        <div onMouseDown={handleMouseDown}>
          {/* Top-left controls */}
          <div
            style={{
              position: "absolute",
              top: -2,
              left: 4,
              display: "flex",
              gap: 10,
              zIndex: 10,
            }}
          >
            {/* To delete the card */}
            {/* <div
              onClick={() => deleteCard()}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "red",
                cursor: "pointer",
              }}
            /> */}

            <div
              onClick={(e) => {
                e.stopPropagation();
                changeZone();
              }}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "orange",
                cursor: "pointer",
              }}
            />

            <div
              onClick={(e) => {
                e.stopPropagation();
                popUp(imageCardNormal);
              }}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "yellow",
                cursor: "pointer",
              }}
            />

            <div
              onClick={(e) => {
                e.stopPropagation();
                rotateCard();
              }}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "green",
                cursor: "pointer",
              }}
            />

            <div
              onClick={(e) => {
                e.stopPropagation();
                unTap();
              }}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "blue",
                cursor: "pointer",
              }}
            />
          </div>

          <img src={imageCardSmall} alt="Magic Card" draggable={false} />
        </div>
      </div>
    </>
  );
}
