import React from "react";

const Square = ({ square, index, handleSquareClick}) => {

  const handleClick = () => {
    handleSquareClick(index)
  }

  return <div className="square" onClick={handleClick}>{square}</div>;
};
export default Square;
