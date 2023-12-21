import React from "react";

const Square = ({ square, index, handleSquareClick, handlePlayerOneWin }) => {
  const handleClick = () => {
    if (square === null) {
      handleSquareClick(index);
      console.log(index);
    } else {
      alert("awe maaaaan this square is occupied, click a different one Dude!");
    }
  };
  
  const winner = () => {
    if (square === "❌") {
      handlePlayerOneWin()
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {square}
      {winner()}
    </div>
  );
};

export default Square;
