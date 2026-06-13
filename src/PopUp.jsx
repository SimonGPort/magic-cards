import { useState } from "react";
import "./App.css";

function PopUp({ image, onClose }) {
  return (
    <div
      //   onClick={onClose}
      onClick={() => onClose()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "transparent",
        }}
      >
        <img
          src={image}
          alt="popup"
          style={{
            maxHeight: "80vh",
            maxWidth: "90vw",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
}

export default PopUp;
