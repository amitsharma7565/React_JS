import React, { Component } from "react";

import ComponentUseContextB from "./ComponentUseContextB";
function ComponentUseContextA(){
    return(
        <div>
            <ComponentUseContextB />
        </div>
    )
}
export default ComponentUseContextA;
