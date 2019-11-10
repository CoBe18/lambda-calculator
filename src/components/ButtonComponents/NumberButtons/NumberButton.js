//import any components needed
import React from "react";
import styled from 'styled-components'


const Button = styled.button`
background-color: #194379;
 
  // STEP 2 - add the imported data to state

  const NumberButton = () => {

      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
 

       const NumberButton = (props) => {
        return (
          <>
           <Button className='button zero' onClick={()=> props.i }>
             {props.i}
           </Button>
           
          </>
        );
      };
      export default NumberButton;
         {/* Display a button element rendering the data being passed down from the parent container on props */}
  
