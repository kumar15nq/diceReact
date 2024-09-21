import React, { useState } from "react";
import "../App.css";

function Randomdice(props) {
  const { rdice, setRdice, selnum, score, setScore } = props;
  function playDice() {
    const rn = Math.ceil(Math.random() * 6);
    setRdice(rn);

    if (selnum == rdice) {
      setScore(score + 3);
    } else {
      setScore(score - 1);
    }
  }
  return (
    <div className="mainDice">
      <img src={`dice_${rdice}.png`} onClick={() => playDice()} />
      <h3>Click on dice to roll</h3>
      <button style={{ marginBottom: "20px" }}>Reset Score</button>
      <button>Show result</button>
    </div>
  );
}

export default Randomdice;
