 import React,{useState} from "react";

 function Car(){
   let[car,updateColour]= useState({
        brand:"Ford",
        model:"Mustang",
        year:1964,
        color:"Red"
    })

    function changeColor(){
        updateColour((m)=>{
            return{...m,color:"Blue"}
        })
    }


    return(
        <div>
            <h1>{car.brand}</h1>
            <h1>{car.model}</h1>
            <h1>{car.year}</h1>
            <h1>{car.color}</h1>
            <button onClick={changeColor}>UpdateColour</button>
        </div>
    )
 }

 export default Car;