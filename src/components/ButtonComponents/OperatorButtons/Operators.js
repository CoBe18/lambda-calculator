//import any components needed
import React from 'react';

import '../../../styles/operators.scss';

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../../data';

function Operators() {
  return (
    <div id="operators">
      {operators.map((i, k) => (
        <OperatorButton key={k} o={i.char} />
      ))}
    </div>
  );
}

export default Operators;