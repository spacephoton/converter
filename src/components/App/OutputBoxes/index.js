import React from 'react'

function Output(props) {

    return (
        <div>
            <p>
                Output boxes
            </p>
            <h1>C: {props.celcius}</h1>
            <div></div>
            <h1>F: {props.fahrenheit}</h1>
        </div>
    )

}

export default Output;