import React, { useState } from "react"
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [ascendingMoves, setAscendingMoves] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const newHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  };
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    (move > 0) 
    ? description = "Go to move #" + move 
    : description = "Go to game start";
    return (
      <li key={move}>
        {move !== currentMove || move === 0
        ? <button onClick={() => jumpTo(move)}>{description}</button>
        : <>You are at move {move}</>
        }
      </li>
    );
  });

  const filterMoves = () => setAscendingMoves(!ascendingMoves);

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <button onClick={filterMoves}>Switch to {ascendingMoves ? 'descending' : 'ascending'} order</button>
        <ol>{ascendingMoves? moves : moves.reverse()}</ol>
      </div>
    </div>
  )
}