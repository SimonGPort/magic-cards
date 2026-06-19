import { useState } from "react";
import "./App.css";

function Construction({ deck, setDeck, cards, setCards }) {
  const [stage, setStage] = useState("dates");
  const [dates, setDates] = useState({ date1: "", date2: "" });
  const [cardsFetched, setCardFetched] = useState([]);

  const fetchCards = async () => {
    const res = await fetch(
      `http://localhost:3001/cards?date1=${dates.date1}&date2=${dates.date2}`,
    );
    const cards = await res.json();

    setCardFetched(cards);
    setStage("player1");
  };

  return (
    <>
      {stage === "dates" && (
        <>
          <h1>Which generation is it?</h1>
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
        </>
      )}
    </>
  );
}

export default Construction;
