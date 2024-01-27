import React,{useState} from "react";


function Login(){
    const [user,setUser]=useState("")
    const [password,setpassword ]=useState("")
    const[userErr, setUserErr]=useState(false)
    const[passErr, setpassErr]=useState(false)

    function loginHandle(){

        if(user.length<3||password.length<3){
            alert("type correct value")
        }
        else{
            alert("All good")
        }
    }

    function userHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item)
        console.log(e.target.value.length)
    }




    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setpassword(item)
        console.log(e.target.value.length)
    }


    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter user id" onChange={userHandler}></input>{userErr?<span>User not valid</span>:""}
             <br></br>
            <input type="password" placeholder="Enter password"onChange={passwordHandler}></input> <br></br>{passErr?<span>Password not valid</span>:""}
            <button type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default Login;