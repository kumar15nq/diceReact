import viteLogo from "/vite.svg";
import "./App.css";
import Playgame from "./Pages/Playgame";
import Startgame from "./Pages/Startgame";
import { useState } from "react";

function App() {
  const [play, setPlay] = useState(true);
  return (
    <div className="mainDiv">
      {play ? <Playgame setPlay={setPlay} /> : <Startgame />}
    </div>
  );
}

export default App;
