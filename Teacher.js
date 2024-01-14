import React from "react";


class Teacher extends React.Component{

    
    render()
    {
        console.log(this.props)
        return(
         <div style={{backgroundColor: 'skyblue', margin:20}}>
            <h1> Hello {this.props.name}</h1>
            <h3> Email {this.props.email}</h3>
            </div>
        
        )
    }
}


export default Teacher