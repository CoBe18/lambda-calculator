//import any components needed
import React from 'react';

function NumberButton(props) {
  const handleClick = () => {
    const display = document.getElementsByClassName('display')[0];
    display.innerHTML === '0'
      ? (display.innerHTML = '' + props.numbers)
      : (display.innerHTML += props.numbers);
  };
  return (
    <div id="number-btn">
      <h1 onClick={handleClick}>{props.numbers}</h1>
    </div>
  );
}

export default NumberButton;
