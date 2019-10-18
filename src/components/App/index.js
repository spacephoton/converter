import React, { useState} from 'react';
import './App.css';
import InputBox from './InputBox';
import OutputBox from './OutputBoxes';

//returns pair of elements: {celcius, fahrenheit}
function getTemperatures(temperature)
{
  return ([1,11]);
}

function App() {
  const [temperature, setTemperature] = useState(10);
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  return (
    <div className="App">
      <p>
        Converter
      </p>
      <InputBox
        temperature={temperature}
        setTemperature={setTemperature}
      />
      <OutputBox 
        celcius={celcius} 
        fahrenheit={fahrenheit}
      />
    </div>
  );
}

export default App;
