import React from "react";

function Children(){
    const name="Amit";
    const age="25";
    const address="Himachal Pradesh";
        return(
        <div>
            <h1>Personal details</h1>
            <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{address}</li>
            </ul>
        </div>
    )
}
export default Children; 