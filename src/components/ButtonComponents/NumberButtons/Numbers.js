import React from 'react';

import '../../../styles/numbers.scss';

//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data';

function Numbers() {
  return (
    <div id="numbers">
      {numbers.map((n, i) => (
        <NumberButton  key={i} numbers={n} />
      ))}
    </div>
  );
}

export default Numbers;