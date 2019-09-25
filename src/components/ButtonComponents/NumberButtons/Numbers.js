import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
export default function Numbers(props) {
  const [numberState, setNumberState] = useState(numbers);
  const NumButton = numbers.map(numberDataObject => (
    <NumberButton
      numdata={numberDataObject}
      setNumberState={props.setNumberState}
    />
  ));

  // STEP 2 - add the imported data to state
  return <div className="num-container">{NumButton}</div>;
}

{
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
}
