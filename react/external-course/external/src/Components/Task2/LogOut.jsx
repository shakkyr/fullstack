import React from "react";

class LogOut extends React.Component{
    render() {
        return (
             <input type="button" value='logout' onClick={this.props.click}/>
        );
    }
}

export default LogOut;