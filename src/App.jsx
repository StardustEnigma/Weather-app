import { useState } from 'react'
import './App.css'

function App() {
let [location,setLocation]=useState('');
let [submitted,setSubmitted]=useState(false);
const addLocation=()=>{
  setSubmitted(true);
}


  return (
    <>
    <div className="container">
      <div className="Title">Weather App</div>

      {submitted ? (
        <div className="weather">Your location is {location}</div>
      ) : (
        <>
          <div className="location">
            <p className="enter">Enter location</p>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button onClick={addLocation}>Submit</button>
        </>
      )}
    </div>
  </>
  )
}

export default App
