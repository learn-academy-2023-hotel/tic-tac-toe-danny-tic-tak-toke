import React, { useState } from "react";
import Square from "./components/Square";
import "./App.css";

const App = () => {
  const board = Array(9).fill(null);

  const [squares, setSquares] = useState(board);

  const [count, setCount] = useState(0);

  const [message, setMessage] = useState("Player 1 turn");

  const [isGameOver, setIsGameOver] = useState(false);

  const [isBoardFull, setIsBoardFull] = useState(true);

  const handleSquareClick = (clickedSquareIndex) => {
    if (isGameOver === true) {
      squares[clickedSquareIndex] = null;
      return null;
    }
    let updatedSquare = [...squares];
    if (count === 0) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setMessage("Player 2 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 1) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setMessage("Player 1 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 2) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setMessage("Player 2 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 3) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setMessage("Player 1 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 4) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setMessage("Player 2 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 5) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setMessage("Player 1 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 6) {
      updatedSquare[clickedSquareIndex] = "❌";
      setSquares(updatedSquare);
      setMessage("Player 2 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 7) {
      updatedSquare[clickedSquareIndex] = "⭕";
      setSquares(updatedSquare);
      setMessage("Player 1 turn");
      checkForWin(updatedSquare);
      setCount(count + 1);
    } else if (count === 8) {
      updatedSquare[clickedSquareIndex] = "❌";
      checkForWin(updatedSquare);
      checkFullBoard(updatedSquare);
      setSquares(updatedSquare);
    } else {
      alert("Game Over!");
    }
  };

  const checkFullBoard = (squares) => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        setIsBoardFull(false);
      }
      if (isBoardFull) {
        setMessage("Draw");
      }
    }
  };

  const checkForWin = (squares) => {
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
      let [a, b, c] = winConditions[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        setMessage(squares[a] + " is the winner");
        setIsGameOver(true);
      }
    }
    return null;
  };

  const handleButton = () => {
    setSquares(board);
    setCount(0);
    setMessage("Player 1 turn");
    setIsBoardFull(true);
    setIsGameOver(false);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h1>{message}</h1>
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
      <div className="button-center">
          <button onClick={handleButton}>Restart</button>
      </div>
    </>
  );
};

export default App;
