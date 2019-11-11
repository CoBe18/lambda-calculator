//import any components needed
import React from 'react';

import '../../../styles/specials.scss';

//import any components needed
import SpecialButton from './SpecialButton';

//Import your array data to from the provided data file
import { specials } from '../../../data';

function Specials() {
  
  return (
    <div id="specials">
      {specials.map((i, k) => (
        <SpecialButton key={k} s={i} />
      ))}
    </div>
  );
}

export default Specials;