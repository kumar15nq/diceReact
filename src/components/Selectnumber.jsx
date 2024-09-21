import React, { useState } from "react";
import "../App.css";
const Selectnumber = (props) => {
  const { setSelnum, selnum } = props;
  const numbb = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="mainButton">
        {numbb.map((val) => {
          return (
            <button
              className={`btnSecondary ${selnum == val ? "active" : ""}`}
              onClick={() => setSelnum(val)}
            >
              {val}
            </button>
          );
        })}

        <p className="text">Select Numbers</p>
      </div>
    </div>
  );
};

export default Selectnumber;
