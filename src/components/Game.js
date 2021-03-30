import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "../helpers";

const style = {
  width: "200px",
  margin: "20px auto",
};

function Game() {
  //const [board, setboard] = useState(Array(9).fill(null));
  const [history, sethistory] = useState([Array(9).fill(null)]);
  const [stepNum, setStepNum] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNum]);

  const handleClick = (i) => {
    //const boardCopy = [...board];
    const timeInHistory = history.slice(0, stepNum + 1);
    const current = timeInHistory[stepNum];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";
    //setboard(boardCopy);
    sethistory([...timeInHistory, squares]);
    setStepNum(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNum(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNum]} onClick={handleClick} />
      <div style={style}>
        <p>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
