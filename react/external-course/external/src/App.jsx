import React from "react";
import Todo from "./Components/Task3/Todo";
// import Greetings from "./Components/Task2/Greetings";
// import Guest from "./Components/Task2/Guest";
// import User from "./Components/Task2/User";

// class App extends React.Component {
   
    
//     state = {
//         isLoged : true
//     }
    
//     loginHandler = ()=> {
//         this.setState({
//             isLoged: true
//         })
//     }
//     logoutHandler = ()=> {
//         this.setState({
//             isLoged : false
//         })
//     }


    
    
//     render() {
//         let button;

//         if (this.state.isLoged){
//             button = <logOut  click={this.logoutHandler}/>
//         } else {
//             button = <logIn click={this.loginHandler} />
//         }

//         return (
//              <div className="App">
//              <Greetings isLoged={this.state.isLoged} />
             
//              {button }

//              </div>
//         );
//     }
// }

const App = ()=> {
    return (
        <div>
            <Todo />
        </div>
    )
}

export default App;