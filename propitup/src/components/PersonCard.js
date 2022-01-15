import React from "react";
import '../App.css'

function PersonCard (props) {
    return (
        <div className="App">
            <h1>{props.fName} {props.lName}</h1>
            <p> Age:{props.age}</p>
            <p> Hair Color:{props.color}</p>

        </div>
    )
}

export default  PersonCard;