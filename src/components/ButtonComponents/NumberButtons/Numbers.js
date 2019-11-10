//import any components needed
import React, { useState } from "react";
import {numbers} from '../../../data'
import NumberButton from './NumberButton'
import Display from "../../DisplayComponents/Display";


const Numbers = () => {
  const[num, setNum] = useState(numbers)

      console.log(num)
//Import your array data to from the provided data file
const Numbers = () => {
 
  // STEP 2 - add the imported data to state
  
  const NumberButton = (props) => {

  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
  // const number = 11;

  return (
    <div>
      {num.map((i, index) => {
        // console.log(i)
        return<NumberButton key={index} i={i} />
        
      })}
    </div>
  );
};
export default Numbers;