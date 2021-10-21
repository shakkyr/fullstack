import React from "react";


class Todo extends React.Component{
    constructor(props){
        super(props);

    this.state= {
        todos :[
        {id : 1 , toDoName :" To do 1" , isCompleted : false},
        {id : 2 , toDoName :" To do 2" , isCompleted : false},
        {id : 3 , toDoName :" To do 3" , isCompleted : false},
        {id : 4 , toDoName :" To do 4" , isCompleted : false},
        {id : 5 , toDoName :" To do 5" , isCompleted : false}
        ]
    }
    }

    completedTaskHandler = (toDoIndex)=>{
        let toDos = this.state.todos;

        toDos.map((e,index) =>{
            if (index === toDoIndex){
                e.isCompleted = true;
                return this.setState()
            }
            console.log(this.State.toDos);
        }) 

    }
    render() {
        let todo = this.state.todos;
        return (
             <ul>
                {todo.map((e,index) => {
                    return (
                        <li key={e.id} onClick={()=> {this.completedTaskHandler(index)}}>
                        {e.toDoName} 
                        </li>
                    )
                })}
             </ul>
        );
    }
}


export default Todo;