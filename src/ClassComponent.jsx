import React, { Component } from "react";

export default class FirstClass extends Component {
  constructor(props) {
    super();
    this.state = {
      data: 0,
      name: props.name,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state);
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== "hello world") {
      this.setState((prevState) => ({
        ...this.state,
        name: "hello world",
      }));
      console.log(this.state);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      data: prevState.data + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        {this.state.data}

        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
