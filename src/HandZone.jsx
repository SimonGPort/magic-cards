import { useState } from "react";
import DraggableCard from "./DraggableCard";
import PopUp from "./PopUp";

function HandZone() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "50vh",
        backgroundColor: "#f5f0e6", // light beige
        zIndex: 10,
        borderTop: "1px solid #ccc",
      }}
    />
  );
}

export default HandZone;
