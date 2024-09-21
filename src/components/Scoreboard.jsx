import React from "react";

function Scoreboard(props) {
  const { score } = props;
  return (
    <div className="headdings">
      <h1 style={{ marginBottom: "0px" }}>{score}</h1>
      <h3 style={{ marginTop: "0px" }}>Total Score</h3>
    </div>
  );
}

export default Scoreboard;
