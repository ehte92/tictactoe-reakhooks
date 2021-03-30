import React from "react";

const style = {
  background: "black",
  border: "2px solid grey",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  color: "red",
};

function Square({ onClick, value }) {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
