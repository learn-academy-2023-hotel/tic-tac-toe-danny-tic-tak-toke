import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const board = Array(9).fill(null)
  
  const [squares, setSquares] = useState(board);
  
  const [count, setCount] = useState(0);


  const [message, setMessage] = useState("");

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
    } else if (count === 9){
      updatedSquare[clickedSquareIndex] = null
    }
    else {
      alert("Game Over!");
    }
  };

  const handlePlayerOneWin = () => {
    setMessage("Player One Wins");
    setCount(9)
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div>{message}</div>
      <div className="square-container">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              square={square}
              index={index}
              handleSquareClick={handleSquareClick}
              handlePlayerOneWin={handlePlayerOneWin}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
