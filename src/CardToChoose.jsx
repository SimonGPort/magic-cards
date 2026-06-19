import { useState, useEffect } from "react";

export default function CardToChoose({
  imageSmall,
  cardId,
  imageNormal,
  popUp,
  pick,
}) {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        {/* ICONS OVER IMAGE */}
        <div
          style={{
            position: "absolute",
            top: 5,
            left: 5,
            display: "flex",
            gap: 5,
            zIndex: 10,
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              pick(cardId);
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
              popUp(imageNormal);
            }}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "yellow",
              cursor: "pointer",
            }}
          />
        </div>

        {/* IMAGE */}
        <img src={imageSmall} alt="Magic Card" className="card" />
      </div>
    </>
  );
}
