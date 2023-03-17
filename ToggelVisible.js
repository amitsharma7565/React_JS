import React, { useState } from "react";

function ToggelVisible(){
  let[a,SetValue]= useState(true);

  function handle(){
    SetValue(!a)
  }
  return(
    <div>
        <h1>{a?"Toggel Visible":null}</h1>
        {a&&<h1>Toggel visible</h1>}
        <button onClick={handle}>click here</button>
    </div>
  
  )
}

export default ToggelVisible;