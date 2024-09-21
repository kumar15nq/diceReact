import React from "react";

import logo from "../images/dice.png";
import "../App.css";

const Playgame = (props) => {
  const { setPlay } = props;
  return (
    <div className="playGame">
      <img src={logo} />
      <div style={{ width: "100%" }}>
        <h1 style={{ fontSize: "60px" }}>DICE GAME</h1>
        <button className="btnp" onClick={() => setPlay(false)}>
          Play now
        </button>
      </div>
    </div>
  );
};

export default Playgame;
