import { useState } from "react";
import PopUp from "./PopUp";

export default function DraggableCard({ imageCardSmall, imageCardNormal }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [Modal, setModal] = useState(false);
  const [show, setShow] = useState(true);

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
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    show && (
      <>
        <div
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
          }}
        >
          {Modal && (
            <PopUp
              image={imageCardNormal}
              onClose={() => {
                setModal(false);
              }}
            />
          )}
          <div
            onMouseDown={handleMouseDown}
            style={{
              position: "absolute",
              left: position.x,
              top: position.y,
              cursor: dragging ? "grabbing" : "grab",
              transform: `rotate(${rotation}deg)`,
            }}
          >
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
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setModal(true);
                }}
              />

              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "green",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  rotateCard();
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "blue",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  unTap();
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
