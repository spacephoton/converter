import React from 'react';
import TextField from '@material-ui/core/TextField';

function InputBox()
{
    return( 
        <div>
            <p>Input Box</p>
            <TextField
                id="filled-number"
                value="13"
                type="number"
            />
        </div>
    )
}

export default InputBox;