// Home.js
import React, { useEffect, useState } from "react";
import CustomText from "../component/CustomText";
import { useNavigate } from "react-router-dom";
 
// Hook is always a function
 
// State - State is mutable, it allows re-rendering
// Multiple hooks can be added to the same component
 
// Props - Props is immutable.
const Counter = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // heavy lifting job
   console.log("useEffect is been triggered!"); //2
  }, []); // [] - array dependency
  console.log("Home function is been called."); //1
  // if(counter === 0) {
  //   return (
  //     <React.Fragment>
  //       <h1>{`Counter - ${counter}`}</h1>
  //       <p>Let's start the counter!</p>
  //       <button onClick={() => setCounter(counter+1)}>Increment</button>
  //     </React.Fragment>
  //   )
  // }
  const navigateTo = () => {
    navigate('/about');
  }
  return (
    <div>
      <h1>{`Counter - ${counter}`}</h1>
      <CustomText counterValue={counter} />
      <button onClick={() => setCounter(counter+1)}>Increment</button>
      <button onClick={() => navigateTo()}>Go to about page</button>
    </div>
  )
};
 
export default Counter;