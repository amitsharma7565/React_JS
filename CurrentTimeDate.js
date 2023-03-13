 import React from "react";

 function CurrentTimeDate(){
     const currentDate= new Date();
  const hours = currentDate.getHours();
  const mint= currentDate.getMinutes();
  const sec= currentDate.getSeconds();
    return(
        <div>
            <h3>{hours}:{mint}:{sec}</h3>
        </div>
            
      
    )
 }


 export default CurrentTimeDate;