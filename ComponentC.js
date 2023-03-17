import { useContext } from "react";
import { myContext } from "../App";

function componentC(){
    let user= useContext(myContext);
    return(
        <div>
            <h1>
                hi i am {user}
            </h1>
        </div>
    )
}

export default componentC;