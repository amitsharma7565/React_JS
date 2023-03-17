
import React,{Component} from 'react';

class Welcome extends Component{
constructor(){
    super();
this.state={
message:"Hello Amit"
}
}

changeMethod=()=>{ 
this.setState({
message:""
})
}

render(){
return(
<div>
<h1>{this.state.message}</h1>
<button onClick={this.changeMethod}>Subscribe</button>
</div>

)
}

}
export default Welcome;
