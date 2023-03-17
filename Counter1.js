
import React from "react";

import useCustomHook from "./useCustomHook";

function Counter1(){
    let[count,handleIncerment, handleDecrement, handleRest]=useCustomHook();
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleIncerment}>Increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleRest}>Reset</button>
        </div>

    )
}

export default Counter1;