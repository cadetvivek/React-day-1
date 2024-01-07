import React from "react";
import Button from "./Button";

const App = ()=>{
  const myStyle ={
    color:'green',
    backgroundColor: 'yellow'
    
  }
   return (
    <div>
      <h1 style={myStyle}>Wellcome to my React App</h1>
      <h2>Hello vivek developer</h2>
      <Button  text="Click Me" />
    </div>
   )
}
export default App;