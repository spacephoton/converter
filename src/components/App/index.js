import React, { useState} from 'react';
import './App.css'
import InputBox from './InputBox';
import OutputBox from './OutputBoxes';

const precision = 2;

function App() {
  const [temperature, setTemperature] = useState();
  const [celcius, setCelcius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  function updateTemperature(event){
    var current = event.target.value;
    setTemperature(current);
    setFahrenheit(parseFloat(Math.fround((current * 9 / 5) + 32)).toFixed(precision));
    setCelcius(parseFloat(Math.fround((current - 32) * 5 / 9)).toFixed(precision));
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
