import React,{useEffect, useState} from "react";

function Profile(){

const [loggesIn, setLoggedIn]=useState(3)
// let loggesIn=3



    return(
        <div>
            {loggesIn==1?<h1>Welcome user 1</h1>:loggesIn==2?<h1>Welcome user 2</h1>:<h1>Welcome user 3</h1>}
        </div>
    )
}

export default Profile;