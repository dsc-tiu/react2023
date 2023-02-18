import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      batch: this.props.data.batch,
      roll: this.props.data.roll,
      count: this.props.data.count,
    };
  }
  componentDidMount() {
    console.log("componentDidMount called...");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate called...");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called...");
  }
  IncrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>My Name is {this.state.name}</h1>
        <p>
          Roll No. is {this.state.roll} of
          {this.state.batch}. <span>With Count of {this.state.count}</span>
        </p>
        <button type="button" onClick={this.IncrementCount}>
          Increment Count
        </button>
      </div>
    );
  }
}
