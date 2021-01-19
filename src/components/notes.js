import React, { Component } from "react";

export default class Note extends Component {
  state = {};

  render() {
    console.log("increase", this.props);
    return (
      <div style={{ border: "red solid 2px", height: "2em" }}>
        <span> - </span>
        {this.props.title}
        <span
          style={{ justifyCenter: "space-around", border: "green solid 2px" }}
          onClick={() => {
            //console.log("Test increase click");
            this.props.increase(this.props.id);
          }}
        >
          +
        </span>
      </div>
    );
  }
}
