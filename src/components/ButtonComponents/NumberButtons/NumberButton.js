import React from "react";

const NumberButton = (props) => {
  const {number} = props;
  return (
    <div className="numberButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={number}> {number} </button>
    </div>
  );
};

export default NumberButton;

