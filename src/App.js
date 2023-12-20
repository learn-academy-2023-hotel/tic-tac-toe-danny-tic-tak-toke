import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleSquareClick = (clickedSquareIndex) => {
    let updatedSquare = [...squares];
    if (count === 0) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 1) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 2) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 3) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 4) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 5) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 6) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 7) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else if (count === 8) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setCount(count + 1);
    } else {
      alert("Game Over!")
    }
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
