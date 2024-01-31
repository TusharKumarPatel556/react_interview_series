import React, { Component } from "react";
import FirstClass from "./ClassComponent";

export default class SecondClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      name: "tushar",
    };
  }

  render() {
    return (
      <div>
        <FirstClass name={this.state.name} />
      </div>
    );
  }
}
