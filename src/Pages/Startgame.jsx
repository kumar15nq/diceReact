import React, { useState } from "react";
import "../App.css";
import Selectnumber from "../components/Selectnumber";
import Randomdice from "../components/Randomdice";
import Scoreboard from "../components/Scoreboard";

const Startgame = () => {
  let [rdice, setRdice] = useState(1);
  let [selnum, setSelnum] = useState(null);
  let [score, setScore] = useState(0);
  return (
    <div>
      <div className="numb">
        <Scoreboard score={score} />
        <Selectnumber setSelnum={setSelnum} selnum={selnum} />
      </div>
      <Randomdice
        rdice={rdice}
        setRdice={setRdice}
        selnum={selnum}
        score={score}
        setScore={setScore}
      />
    </div>
  );
};

export default Startgame;
