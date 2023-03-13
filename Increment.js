import { Component } from "react";


class Increment extends Component{

    constructor (){
        super();
        this.state={
            count: 0
            
        }
    }

    changeIncremnet=()=>{
        this.setState(
            {
                count:this.state.count+1,
                count:this.state.count+1
            }
        )
    }
    
    unchangeDerement=()=>{
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }

    

    render(){
        return(

            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.changeIncremnet}>Next</button>
           
            <button onClick={this.unchangeDerement}>Previous</button>
            </div>
        )
    }
}

export default Increment;