import React from "react";
import './Todo.css'


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
        let todos = this.state.todos;

        todos.map((todo,index) =>{
            if (index === toDoIndex){
                todo.isCompleted = true;
                return this.setState({todos: todos})
            }
            
        }) 
        console.log(this.state.todos);

    }
    render() {
        let todos = this.state.todos;
        return (
            <div className="App">
             <ul>
                {todos.map((todo,index) => {
                    return (
                        <li key={todo.id} onClick={()=> {this.completedTaskHandler(index)}}
                        className={todo.isCompleted ? 'completed' : ''}>
                        
                        {todo.toDoName} 
                        </li>
                    )
                })}
             </ul>
             </div>
        );
    }
}


export default Todo;