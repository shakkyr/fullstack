import React from "react";

class Task4 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:null
        }
    }
    textHandler = (event)=>{
          this.setState({
              name:event.target.value
          })      

    }

    render() {
        return (
             <div className="Task4">
                 <input type="text" onChange={this.textHandler}/>
                 <h1>Your text =    {this.state.name}</h1>
             </div>
        );
    }
}

export default Task4;