import React,{useState} from "react";

function Calculator(){
    let[b,setDigit]= useState('');

    function Click(){
       setDigit()
    }
    return(
        <div>
            <h1>{b}</h1>
            <button value='1' onClick={Click}>1</button>{'\n'}
            <button value='2' onClick={Click}>2</button>{'\n'}
            <button value='3' onClick={Click}>3</button>{'\n'}
            <button value='4' onClick={Click}>4</button>{'\n'}
            <button value='5' onClick={Click}>5</button>{'\n'}
            <div>
            <button value='6' onClick={Click}>6</button>{'\n'}
            <button value='7' onClick={Click}>7</button>{'\n'}
            <button value='8' onClick={Click}>8</button>{'\n'}
            <button value='9' onClick={Click}>9</button>{'\n'}
            <button value='0' onClick={Click}>0</button>{'\n'}
            </div>
            <div>
            <button value='-' onClick={Click}>-</button>{'\n'}
            <button value='+' onClick={Click}>+</button>{'\n'}
            <button value='*' onClick={Click}>*</button>{'\n'}
            <button value='/' onClick={Click}>/</button>{'\n'}
            <button value='=' onClick={Click}>=</button>{'\n'}
            </div>
           
        </div>
    )
}

export default Calculator;
