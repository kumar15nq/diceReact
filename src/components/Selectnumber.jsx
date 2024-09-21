import React, { useState } from "react";
import "../App.css";
const Selectnumber = (props) => {
  const { setSelnum, selnum } = props;
  return (
    <div>
      <div className="mainButton">
        <div className="buttons">
          <button className="btnSecondary" onClick={() => setSelnum(1)}>
            1
          </button>
          <button className="btnSecondary" onClick={() => setSelnum(2)}>
            2
          </button>
          <button className="btnSecondary" onClick={() => setSelnum(3)}>
            3
          </button>
          <button className="btnSecondary" onClick={() => setSelnum(4)}>
            4
          </button>
          <button className="btnSecondary" onClick={() => setSelnum(5)}>
            5
          </button>
          <button className="btnSecondary" onClick={() => setSelnum(6)}>
            6
          </button>
          <h1>{selnum}</h1>
        </div>

        <p className="text">Select Numbers</p>
      </div>
    </div>
  );
};

export default Selectnumber;
