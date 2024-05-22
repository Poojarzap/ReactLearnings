import { useState , useEffect } from "react";


function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    },[]);
  
    return <h1>I've rendered {count} times!</h1>;
  }
  
function Hooks() {
    return(
    <div>
        <Timer/>
    </div>
  )
  }
  
  export default Hooks;