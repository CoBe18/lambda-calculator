import React from 'react';
import '../../../styles/specials.scss';

function SpecialButton(props) {
  const handleClick = e => {
    const display = document.getElementsByClassName('display')[0];
    const spec = document.getElementById('currSpec');
    spec.innerHTML === 'C'
      ? (display.innerHTML = '')
      : (display.innerHTML = 'um...no');
  };
  return (
    <div onClick={handleClick} id="special-btn">
      <h1 id="currSpec">{props.s}</h1>
    </div>
  );
}

export default SpecialButton;