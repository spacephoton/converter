import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './InputBox.css';

function InputBox(props)
{
    var inputStyle = {
        fontSize: 100,
    }
    return( 
        <div>
            <p>Input Box</p>
            <InputGroup>
                <FormControl
                aria-label="Large"
                autoFocus={true}
                type="number"
                placeholder="Input Temperature in C or F here"
                value={props.temperature}
                onChange={props.updateTemperature}
                >
                </FormControl>
            </InputGroup>
        </div>
    )
}

export default InputBox;