function Square({ winner, value, onSquareClick }) {
  return <button className={`square ${winner && 'winner'}`} onClick={onSquareClick}>{value}</button>;
}

export default Square;