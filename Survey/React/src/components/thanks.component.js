import React, { Component } from "react";

export default class Thanks extends Component {
  constructor(props) {
    super(props);

    this.state = {
        content: "Your response has been recorded. Thank you for your participation. :)"
      };
  }
  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
