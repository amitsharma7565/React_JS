import { useState } from "react";

function useCustomHook(initalValue=0){
    let [a,setCount] =useState(initalValue);


    const handleIncerment=()=>{
        setCount((a)=>a+1);
    }
    const handleDecrement=()=>{
        setCount((a)=>a-1);
    }

    const handleRest=()=>{
        setCount(initalValue);
    }

    return[a,handleIncerment,handleDecrement,handleRest];


}

export default useCustomHook;