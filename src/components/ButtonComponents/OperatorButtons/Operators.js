//import any components needed
import React, { useState } from "react";
import { operators } from '../../../data'
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file

const Operators = () => {
  const [operButton, setOperButton] = useState(operators)

  // STEP 2 - add the imported data to state
  
  
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       
       return (
        <div>
          
          {operButton.map((k, index) => {
           return <OperatorButton key={index} k={k} />
          })}
    
        </div>
      );
    };
    export default Operators;

