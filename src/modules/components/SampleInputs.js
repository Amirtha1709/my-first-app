import React, { useState } from "react";

export default function SampleInputs() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const [output, setOutput] = useState();

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleAgeChange = (e) =>{
        setAge(e.target.value);
    }


    function handleAmukku(){
        setOutput("My name is "+name+". I am "+age+" years old.")
    }

    const handleClear = () =>{
        setName("");
        setAge("")
        setOutput("")
    }


    return (
        <>
            <h3>sample inputs</h3>
            <br />
            Name : <input type={"text"}  value={name} onChange={handleNameChange}/>
            <br />
            <br />
            Age : <input type={"number"} value={age} onChange={handleAgeChange}/>
            <br />
            <br />
            <button onClick={handleAmukku}>amukku da</button>
            <button onClick={handleClear}>ali ellathayum</button>
            <p>{output}</p>
        </>
    )
}