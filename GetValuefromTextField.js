 import React,{useState} from "react";
 
 function GetValuefromTextField(){

    return(
        <div>
            <form>
                <label>Enter the name</label>
                <input type="text" placeholder="Enter the name" onChange={handleName}></input>
                <label>Enter the email</label>
                <input type="email" placeholder="Enter the email" onChange={handleEmail}></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )

 }


 export default GetValuefromTextField;