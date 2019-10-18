import React, { useState} from 'react';
import './App.css';
import InputBox from './InputBox';
import OutputBox from './OutputBoxes';

//returns temperature in celcius
function getCelcius(fahrenheit)
{
  return 0;
}

//returns temperature in fahreneheit
function getFahrenheit(celcius)
{

  return 0;
}

function App() {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  
  return (
    <div className="App">
      <p>
        Converter
      </p>
      <InputBox>
      </InputBox>
      <OutputBox 
        celcius={celcius} 
        setCelcius={setCelcius} 
        fahrenheit={fahrenheit}
        setFahrenheit={setFahrenheit}
      />
    </div>
  );
}

export default App;
