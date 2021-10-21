import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type='button' value='child' onClick={this.props.click}></input>
            </div>
        )
    }
}

export default Child;