function Sample(props)




{
    return(
        <div>
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <button onClick={()=>check()}> click me {props.data.phoneNo}</button>

        </div>
   
    )
}


function check(){
    alert("working")
}

export default Sample;