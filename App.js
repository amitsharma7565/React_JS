import logo from './logo.svg';
import './App.css';
import User from './FunctionComponen';
import ClassComponent from './ClassComponent';
import {useState} from 'react';
import React,{Component} from 'react';
import Student from './Student';
import Teacher from './Teacher';
import Profile from './Profile';
import Login from './Login';
import Members from './Members';


// function App() {
//   return (
//     <div className="App">
//       <h1>Props !</h1>
//     </div>
//   );
// }


// function App() {

// const [data,setData]=useState(0)
//   function Updatedata(){
//     setData(data+1)
//   }
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={Updatedata} >Update data</button>
//     </div>
//   );
// }


// class App extends Component {

// constructor()
// {
//   super();
//   this.state={
//     // data:"Amit Sharma"
//     data:1
//   }
// }

// appple()
// {
//   // alert("Apple")
//   this.setState({data:this.state.data+1})
// }

// render(){
//   return (
//         <div className="App">
//           <h1>{this.state.data}</h1>
//           <button onClick={()=>this.appple()}>Update Data</button>
//         </div>
//       );
// }

   
//   }



// function App() {
//   const [name, setName]= useState("Suman Sharma")
//   const [name1, setName1]= useState("abc")
//   const [name2, setName2]= useState("xyz")
//   return (
//     <div className="App">
//       <h1>Props in React :)</h1>
//       <Student name={name} email="amit.sharma@ftechiz.com" other={{address:"Delhi", mobile:"12234"}}   />
//       <button onClick={()=>{setName("Suresh Kumar Sharma")}}>update name</button>
//       <Student name={name1} email="varsha@ftechiz.com" other={{address:"noida", mobile:"0000"}}   />
//       <button onClick={()=>{setName1("def")}}>update name</button>
//       <Student name={name2}email="palak@ftechiz.com" other={{address:"gurugram", mobile:"1122"}}   />
//       <button onClick={()=>{setName2("ghi")}}>update name</button>
//     </div>
//   );
// }


// class App extends React.Component {

// constructor(){
//   super();
//   this.state={
//     name:"utyun"
//   }
// }

//   render()
//   {
//     return (
//       <div className="App">
//         <h1>Props !</h1>
//         <Teacher name ={this.state.name}email="amitsharma@gnail.com"/>
//         <button onClick={()=>this.setState({name:"Amit sharma"})}>Update name</button>
//         <Teacher name ="Varsha" email="varsha@bl.com"/>
  
//       </div>
//     );
//   }

 
// }



// function App() {
//   const [data, setData]=useState(null)
//   const[print, setPrint]= useState(false)
// function getdata(vale){
// console.log(vale.target.value)
// setData(vale.target.value)
// setPrint(false)
// }
//   return (
//     <div className="App">
//       {
//         print?
//         <h1>{data}</h1>
//         :null
//       }
//       <input type='text' onChange={getdata}/>
//       <button onClick={()=>setPrint(true)} >Print data</button>
//     </div>
//   );
// }

// function App() {
//   const [status, setStatus] =useState(false)

//   return (
//     <div className="App">
//       {
//         status?<h1>Hello world !</h1>:null  
//       } 
//       {/* <button onClick={()=>setStatus(false)}> Hide</button>
//       <button onClick={()=>setStatus(true)} >Show</button> */}

//   <button onClick={()=>setStatus(!status)} >Toggle</button> 

//     </div>
//   );
// }


// function App() {

//   const[name,setName]=useState("")
//   const[tnc,setTnc]=useState(false)
//   const[interset, setInterser]=useState("")


//   function getFormData(e)
//   {
//     console.log(name,tnc,interset)

//   }
//   return (
//     <div className="App">
//       <h1>Handle the form in react!</h1>
//       <form onSubmit={getFormData}>
//         <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}/> <br/><br/>
//         <select onChange={(e)=>setInterser(e.target.value)} >
//           <option>Select options</option>
//           <option>Marvel</option>
//           <option>Dc</option>
//           <option>Ac</option>
//         </select><br/><br/>
//         <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}></input><span>Accept term and conditions</span><br/><br/>
//         <button type='submit'>submit</button>
//       </form>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <Profile/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Login/>
//     </div>
//   );
// }



// function App() {

// function getdata(){
//   alert("hello from app")
// }

//   return (
//     <div className="App">
//       <User data={getdata}/>

//       <div>
//         <Members data={getdata} />
//       </div>
//     </div>
    
//   );
// }



// class App extends React.Component{

//   constructor()
//   {
//     super()
//     this.state={
//       data:"Amit Sharma"
//     }
//   }

//   render()
//   {
//     console.log("render")
//     return(

//       <h1>Hello world {this.state.data}</h1>
//     )
//   }
// }




// function App() {
//   const[name,setName]=React.useState("Amit")
//   return (
//     <div className="App">
//       <ClassComponent name= {name}/>
//     <button onClick={()=>setName("sharma")}>Update name</button>
//     </div>
//   );
// }


class App extends React.Component{
  constructor(){
    super();
   this.state={
    name:"amit"
   }
  }
componentDidMount(){
  console.log("componentDidMount ")
}

  render(){
    console.log("render")
    return(
      <div className="App">
           <h1>Component Did mount {this.state.name}</h1>
           <button onClick={()=>this.setState({name:"Varsha"})}>update name</button>
           </div>
    )
  }
}

export default App;
