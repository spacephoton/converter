import React, { useState} from 'react';
import './App.css'
import InputBox from './InputBox';
import OutputBox from './OutputBoxes';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    <div>
      <Container>
        <Row></Row>
        <Row>
          <Col>
            <InputBox
            temperature={temperature}
            updateTemperature={updateTemperature}
            />
          </Col>
          <Col>
            <h1>O => C: </h1>
            <br></br>
            <h1>C => F: </h1>
          </Col>
          <Col>
            <OutputBox 
            celcius={celcius} 
            fahrenheit={fahrenheit}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
