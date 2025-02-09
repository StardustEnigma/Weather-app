import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [location, setLocation] = useState('');
  let [submitted, setSubmitted] = useState(false);
  let [weatherData, setWeatherData] = useState(null);

  const addLocation = () => {
    setSubmitted(true);
    fetchWeatherData(); 
  };

  const fetchWeatherData = async () => {
    try {
    
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}&units=metric`
      );
      const Data = {
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        cloudiness: response.data.clouds.all
      };

      setWeatherData(Data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="Title">Weather App</div>

        {submitted ? (
          <div className="weather">
            <p className='Place'>{location}</p>
            {weatherData ? (
              <>
                <p className='object'>Description: {weatherData.description}</p>
                <p className='object'>Temperature: {weatherData.temperature} °C</p>
                <p className='object'>Humidity: {weatherData.humidity} %</p>
                <p className='object'>Cloudiness: {weatherData.cloudiness} %</p>
              </>
            ) : (
              <p>Loading weather data...</p>
            )}
          </div>
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
  );
}

export default App;
