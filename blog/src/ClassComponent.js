import React from "react";

class ClassComponent extends React.Component {

    constructor(){
        super()
        this.state={
            email:"amitsharma7565@gmail.com"
        }
    }

    render() {
        console.log("render method",this.props)
        console.log("rende method", this.state.email)
        
        return (
            <div>
             <h1>Hello form Class Component {this.props.name}</h1>
             <h3>Email : {this.state.email}</h3>
            <button onClick={()=>this.setState({email:"amit.sharma@ftechiz"})}>change email</button>
            </div>
         
        )
    }
}
export default ClassComponent;