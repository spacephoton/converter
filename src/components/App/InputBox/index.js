import React from 'react';
import Input from '@material-ui/core/TextField';

function InputBox(props)
{
    return( 
        <div>
            <p>Input Box</p>
            <Input
                type="number"
                value={props.temperature}
                onChange={props.updateTemperature}
            />
        </div>
    )
}

export default InputBox;