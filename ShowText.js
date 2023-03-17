import React, { useEffect } from "react"

function ShowText(){
  let[username, setUsername]= useEffect("");

    function handleText(event){
        event.preventDefault();
        setUsername(event.target.value);
    }


    return(
        <div>
            <form>
            <label>Enter Your name:</label>
            <input type="text"  placeholder="enter your name"/>
            <button onClick={handleText} >Submit</button>
            </form>
        <h1>Hello,{username}</h1>
        </div>
    )
}

export default ShowText;

