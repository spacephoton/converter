import React from 'react';
import Input from '@material-ui/core/TextField';
import './InputBox.css';

function InputBox(props)
{
    var inputStyle = {
        fontSize: 100,
    }
    return( 
        <div>
            <p>Input Box</p>
            <input
                fullWidth={true}
                autoFocus={true}
                style={inputStyle}
                type="number"
                placeholder="Input Temperature in C or F here"
                value={props.temperature}
                onChange={props.updateTemperature}
            />
        </div>
    )
}

export default InputBox;