import { useState } from "react";
import CardToChoose from "./CardToChoose";
import PopUp from "./PopUp";
import "./App.css";

function Construction({ deck, setDeck }) {
  const [stage, setStage] = useState("dates");
  const [dates, setDates] = useState({ date1: "", date2: "" });
  const [cardsFetched, setCardFetched] = useState([]);
  const [Modal, setModal] = useState("");

  const fetchCards = async () => {
    const res = await fetch(
      `http://localhost:3001/cards?date1=${dates.date1}&date2=${dates.date2}`,
    );
    const cards = await res.json();
    console.log("helloworld", cards);
    const updatedCards = cards.map((card, index) => ({
      ...card,
      player: index < 84 ? 1 : 2,
      posX: 100,
      posY: 550,
      rotation: 0,
      zone: "hand",
    }));
    setCardFetched(updatedCards);
    setStage("player1");
  };

  const pick = (id) => {
    const cardToMove = cardsFetched.find((c) => c.id === id);
    if (!cardToMove) return;

    setCardFetched((prev) => prev.filter((c) => c.id !== id));

    setDeck((prev) => [...prev, { ...cardToMove, zone: "deck" }]);
  };

  return (
    <>
      {Modal && <PopUp image={Modal} onClose={() => setModal("")} />}
      {stage === "dates" && (
        <>
          <h1>Which generation is it?</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <input
              style={{ width: "125px", marginBottom: "20px" }}
              type="date"
              value={dates.date1 || ""}
              onChange={(e) =>
                setDates((prev) => ({
                  ...prev,
                  date1: e.target.value,
                }))
              }
            />

            <input
              style={{ width: "125px", marginBottom: "20px" }}
              type="date"
              value={dates.date2 || ""}
              onChange={(e) =>
                setDates((prev) => ({
                  ...prev,
                  date2: e.target.value,
                }))
              }
            />
            <button
              style={{ width: "125px" }}
              onClick={() => {
                if (!dates.date1 || !dates.date2) return;
                fetchCards();
              }}
            >
              Go
            </button>
          </div>
        </>
      )}
      {stage === "player1" && (
        <>
          <h1>Player 1</h1>
          <div>
            <h4>
              Number of cards {deck.filter((card) => card.player === 1).length}
            </h4>
            {/* <input>green land</input>
            <input>white land</input>
            <input>blue land</input>
            <input>red land</input>
            <input>black land</input> */}
          </div>
          <div className="cardsContainer">
            {cardsFetched.map((card, idx) => {
              if (card.player !== 1) return;
              return (
                <CardToChoose
                  id={idx}
                  pick={(id) => {
                    pick(id);
                  }}
                  imageSmall={card.imageSmall}
                  imageNormal={card.imageNormal}
                  cardId={card.id}
                  popUp={(image) => {
                    setModal(image);
                  }}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Construction;
