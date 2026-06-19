import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import BattleGround from "./PlayGround";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 100,
      posY: 100,
      rotation: 0,
      zone: "play",
      player: 1,
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 300,
      posY: 300,
      rotation: 0,
      zone: "play",
      player: 1,
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 100,
      posY: 550,
      rotation: 0,
      zone: "hand",
      player: 1,
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 300,
      posY: 550,
      rotation: 0,
      zone: "hand",
      player: 2,
    },
  ]);

  const [deck, setDeck] = useState([
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 100,
      posY: 550,
      rotation: 0,
      zone: "hand",
      player: 1,
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 100,
      posY: 550,
      rotation: 0,
      zone: "hand",
      player: 1,
    },
    {
      imageCardSmall:
        "https://cards.scryfall.io/small/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      imageCardNormal:
        "https://cards.scryfall.io/normal/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg?1614638838",
      posX: 300,
      posY: 550,
      rotation: 0,
      zone: "hand",
      player: 2,
    },
  ]);

  return (
    <>
      <BattleGround
        cards={cards}
        setCards={setCards}
        deck={deck}
        setDeck={setDeck}
      />
    </>
  );
}

export default App;
