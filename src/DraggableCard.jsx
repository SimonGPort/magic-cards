import { useState, useEffect } from "react";

export default function DraggableCard({
  id,
  imageCardSmall,
  imageCardNormal,
  posX,
  posY,
  popUp,
  updateCard,
}) {
  const [dragging, setDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [show, setShow] = useState(true);

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
        setRotation(90);
        break;
      case 90:
        setRotation(180);
        break;
      case 180:
        setRotation(270);
        break;
      case 270:
        setRotation(0);
        break;
      default:
        setRotation(0);
    }
  };

  const unTap = () => {
    setRotation(0);
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
    show && (
      <>
        <div
          style={{
            position: "absolute",
            left: posX,
            top: posY,
            cursor: dragging ? "grabbing" : "grab",
            transform: `rotate(${rotation}deg)`,
            zIndex: dragging ? 999 : 1,
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
              <div
                onClick={() => setShow(false)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "red",
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
    )
  );
}
