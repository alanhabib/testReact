import React from "react";
import "./Person.css";

const person = (props) => {
    return (
        <div className="Person">
            <input type="text" onChange={props.change} value={props.name} />
            <p onClick={props.click} >My name is: {props.name} and my age are: {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;