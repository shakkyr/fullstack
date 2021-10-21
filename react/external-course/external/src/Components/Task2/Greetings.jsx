import React from "react";
import User from "./User";
import Guest from "./Guest";


const Greetings = (props)=> {
    if (props.isLoged){
        return <User />
    }
    else {
        return <Guest />
    }
}

export default Greetings;
