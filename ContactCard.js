
import React from "react";

function ContactCard(propsss){
    return(
     
            <ul>
                <li>{propsss['name']}</li>
                <li>{propsss.phone}</li>
                <li>{propsss.email}</li>
            </ul>
       
    )
}

export default ContactCard;