
import React from "react";
class Students extends React.Component{
    
    componentWillUnmount(){
        console.log("componentWillUnmount call")
    }
render(){
    return(
        <div className="App">
            <h1>Student component</h1>
        </div>
    )
}

}

export default Students