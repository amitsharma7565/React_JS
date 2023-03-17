import { useState } from "react";

function useCustomHookForButton(){
    let[message,setMessage]= useState(true);

    function handleButton(){
        setMessage(!message)
    }

    return[message,handleButton];

 }

 export default useCustomHookForButton;