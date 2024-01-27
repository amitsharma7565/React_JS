import React,{useEffect,useState} from "react"

function App(props){
  useEffect(()=>{
    console.log("useEffect function call")
  })
    return(
      <div className='App'> 
      <h1>count Props:{props.count}</h1>
      <h2>data Props :{props.data}</h2>
      </div>
    )
  }
  export default App;