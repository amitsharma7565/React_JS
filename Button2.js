import React, { useState } from "react";
import useCustomHookForButton from "./useCustomHookForButton";
function Button2(){
    let[message,handleButton]=useCustomHookForButton();
   return(
       <div>
       <h1>{message?"If you want switch on Light click ON button ":"If you want switch off Light click OFF button "}</h1>
       <button onClick={handleButton}> {message?"on":"off"} </button>   
       </div>
   )
}

export default Button2;