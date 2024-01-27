

import React,{useEffect,useState} from "react"

function Profile(props){
  useEffect(()=>{
    console.log("count is "+ props.count)

  },[props.count])
    return(
      <div className='App'> 
      <h1>count Props:{props.count}</h1>
      <h2>data Props :{props.data}</h2>
      </div>
    )
  }

export default Profile;