//import any components needed
import React, { useState } from "react";
import { specials } from '../../../data'
import SpecialButton from './SpecialButton'
//Import your array data to from the provided data file

const Specials = () => {
  const [specNum, setSpecNum] = useState(specials)


  // STEP 2 - add the imported data to state
  
  return (
    <div>
    
      {specNum.map((j, index) => (
        <SpecialButton key={index} j={j} />
      ))}

    </div>
  );
};
export default Specials;
