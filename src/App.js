import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleSquareClick = (clickedSquareIndex) => {
    let player1 = [...squares];
    player1[clickedSquareIndex] = "⭕";
    setSquares(player1)
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="square-container">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              square={square}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
