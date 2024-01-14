function Student(props){

    console.log(props)
    return(
        <div style={{backgroundColor: "red", margin: 20}}> 
            <h1>Hello {props.name}</h1>
            <h2>Email : {props.email}</h2>
            <h4>Address {props.other.address}</h4>
            <h6>Address {props.other.mobile}</h6>
        </div>
    )
}


export default Student