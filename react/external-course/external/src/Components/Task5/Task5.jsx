import React from "react";


class Task5 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            tutorials: [
                {id:1, title: 'learn HTML'},
                {id:2, title: 'learn JS'},
                {id:3, title: 'learn REACT'}
            ]
        }
    }
    textHandler = (event)=>{
        this.setState({
            name:event.target.value
        })      

  }

    removeHandler = (courseIndex)=>{
        let tutorials = this.state.tutorials;
        tutorials.map(course=>{
            if(course.id === courseIndex){
                tutorials.splice(courseIndex, 1);
                return this.setState({tutorials: tutorials})
            }
        })
    }

    render() {
        return (
             <div>
              <input type="text" onChange={this.textHandler}/>
                 <h1>Your text =    {this.state.name}</h1>
             <ul>
                 {this.state.tutorials.map((course, index)=>{
                     return <li key={course.id} onClick={()=>this.removeHandler(index)}>{course.title}</li>
                 })}
             </ul>

             </div>
        );
    }
}

export default Task5;