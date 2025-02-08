import { useState } from 'react'
import './App.css'

function App() {
let [location,setLocation]=useState('');

 const addLocation=()=>{
  const input=document.querySelector("input");
  const button=document.querySelector("button")
  setLocation(input.value);
  console.log(input.value);
  input.style.display="none";
  button.style.display="none";
}

  return (
    <>
    <div className="container">
     <div className="Title">Wheather App</div>
     <div className="location">
      <p>Enter location</p>
      <input type="text" />
     </div>
     <button onClick={addLocation}>Submit</button>
     </div>
    </>
  )
}

export default App
