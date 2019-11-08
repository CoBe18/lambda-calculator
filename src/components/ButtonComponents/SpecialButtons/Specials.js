//import any components needed
import React, {useState} from "react";
//Import your array data to from the provided data file
import {specials} from "/Users/red/Desktop/lambda/projects/lambda-calculator/src/data"
import SpecialButton from "./SpecialButton";


const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  console.log(specialState);


  return (
    <div className='specials'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map((x, i) => <SpecialButton key={i} special={x}/>)}

    </div>
  );
};

export default Specials;