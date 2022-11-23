import React from "react";
import "./square.css";

const Square = ({ value, chooseSquare }) => {
  return (
    <div onClick={chooseSquare} className="square">
      {value}
    </div>
  );
};

export default Square;
