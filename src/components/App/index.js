import React, { useState} from 'react';
import './App.css';
import InputBox from './InputBox';
import OutputBox from './OutputBoxes';

function App() {
  const [temperature, setTemperature] = useState(10);
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  function updateTemperature(event){
    var current = event.target.value;
    setTemperature(current);
    setFahrenheit(Math.round((current * 9 / 5) + 32),5);
    setCelcius(Math.round((current - 32) * 5 / 9),14);
    return null;
  }

  return (
    <div className="App">
      <p>
        Converter
      </p>
      <InputBox
        temperature={temperature}
        updateTemperature={updateTemperature}
      />
      <OutputBox 
        celcius={celcius} 
        fahrenheit={fahrenheit}
      />
    </div>
  );
}

export default App;
