import React, { Component } from "react";
import Note from "./notes.js";

export default class Board extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          width: "150px",
          height: "100em",
          display: "flex",
          flexFlow: "column",
          border: "black solid 2px",
          margin: "5px"
        }}
      >
        <div>{this.props.title}</div>
        <Note
          id={this.props.id}
          increase={this.props.pushForward}
          title={this.props.noteList}
        />
      </div>
    );
  }
}
