import React from "react";

const Square = ({ square, index, handleSquareClick }) => {
  const handleClick = () => {
    if (square === null) {
      handleSquareClick(index);
    } else {
      alert("awe maaaaan this square is occupied, click a different one Dude!");
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {square}
    </div>
  );
};

export default Square;
