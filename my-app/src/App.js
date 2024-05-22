import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from './components/Abc';


class Greeting extends React.Component{
  render(){
    return <p>Hi {this.props.name}</p>
}
}

// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0
//     }
//   }
//   render(){
//     return (
//       <div>
//         <p>You clicked the button {this.state.count} timezzz</p>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>
//           Click ME!!!!!
//           </button>
//       </div>
//     )
//   }
// }

function Counter(){
  const [count,setCount]=useState(0)

  function increment(){
    setCount(count+1)
  }
  return(
      <div>
        <p>Count :{count}</p>
      <button onClick={increment}>Increment</button>
      </div>
  )
}

function App() {
  return(
  <Posts/>
)
}

export default App;