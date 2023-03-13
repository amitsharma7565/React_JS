import React, {useState} from "react";

function UseStateHook(){

    let[a,setString]=useState("hi Amit");

    function Thanks(){
        setString("Thanks for Subscribe")
    }

    function Reset1(){
        setString("hi Amit")
    }

    return(
        <div>
            <h1>{a}</h1>
            <button onClick={Thanks}>Subscribe</button>
            <button onClick={Reset1}>Reset</button>
       
        </div>
    )
}

export default UseStateHook;