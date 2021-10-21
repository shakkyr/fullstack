import React from "react";
import Child from "./Task1Chils";

class Task1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "shadi rada",
      posts: [
        { title: "title1", content: "content1" },
        { title: "title2", content: "content2" },
      ],
    };
  }
  switchNameHandler = () => {
    this.setState({
        name:'shadi hero'
    })
  };

  render() {
    return (
      <div>
      <Child clcik={this.switchNameHandler}/>
        <div>name = {this.state.name} </div>
        <div>title = {this.state.posts[0].title} click={this.switchNameHandler}</div>
        <input
          type="button"
          value="click me"
          onClick={this.switchNameHandler}
        />
      </div>
    );
  }
}

export default Task1;
