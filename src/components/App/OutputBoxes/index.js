import React from 'react'

function Output(props) {

    return (
        <div>

            <h1>{props.celcius}</h1>
            <br></br>
            <h1>{props.fahrenheit}</h1>
        </div>
    )

}

export default Output;