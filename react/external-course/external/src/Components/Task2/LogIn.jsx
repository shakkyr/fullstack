import React from "react";

class LogIn extends React.Component{
    render() {
        return (
             <input type="button" value='login' onClick={this.props.click} />
        );
    }
}

export default LogIn;