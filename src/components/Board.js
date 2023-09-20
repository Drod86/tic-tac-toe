import Square from "./Square";

// Helper functions
function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export default function Board({ xIsNext, squares, onPlay}) {
  function handleClick(i) {
    
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
    onPlay(nextSquares);
  }

  const status = () => {
    const winner = calculateWinner(squares);
    const end = !squares.includes(null);
    console.log(end);
    return winner 
    ? "Winner: " + squares[winner[0]] 
    : end 
      ? "It's a draw!"
      : "Next player: " + (xIsNext ? "X" : "O");
  }
  
  const row = (i) => {
    const winner = calculateWinner(squares);
    const r = [i, i + 1, i + 2];
    return (
      <div className="board-row">
        {r.map(index => <Square winner={winner && winner.includes(index)} value={squares[index]} onSquareClick={() => handleClick(index)}/>)}
      </div>
    )
  }

  const leftColumn = [0,3,6];

  return (
    <>
      <div className="status">{status()}</div>
      {leftColumn.map(index => row(index))}
    </>
  )
}