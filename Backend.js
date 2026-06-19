import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());

app.get("/cards", async (req, res) => {
  const { date1, date2 } = req.query;

  try {
    // 1) get a big pool instead of 1 random card
    const url = `https://api.scryfall.com/cards/search?q=date>=${date1}+date<=${date2}&unique=cards&order=released`;

    const response = await fetch(url);
    const data = await response.json();

    // 2) safety check
    const cards = data.data || [];

    const get168RandomCards = (cards) => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);

      return shuffled.slice(0, 168).map((c) => ({
        id: c.id,
        name: c.name,
        imageSmall: c.image_uris?.small,
        imageNormal: c.image_uris?.normal,
      }));
    };

    // 3) reduce payload size
    const simplified = get168RandomCards(cards);

    res.json(simplified);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});

app.listen(3001, () => {
  console.log("🚀 Backend running on http://localhost:3001");
});
