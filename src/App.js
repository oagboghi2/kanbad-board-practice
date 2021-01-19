import React, { Component } from "react";
import Board from "./components/board.js";
import "./styles.css";

export default class App extends Component {
  state = {
    value: "",
    notes: [],
    prototype: [],
    mvp: [],
    release: [],
    production: []
  };

  handleNote = (event) => {
    this.setState({ value: event.target.value });
    console.log("this.state.value", this.state.value);
  };

  handleSubmit = (event) => {
    this.state.notes.push(this.state.value);
    this.setState((prevState) => ({
      notes: [...prevState.notes, this.state.notes],
      prototype: [...prevState.prototype, this.state.notes[0]]
      //myArray: [...prevState.myArray, "new value"]
    }));
    //this.setState({ notes: this.state.notes, prototype: this.state.notes[0] });

    alert("A name was submitted: " + this.state.value);
    console.log("this.state.notes", this.state.notes);
    console.log("this.state.prototype", this.state.prototype);

    event.preventDefault();
  };

  pushForwardPrototype = (e, id) => {
    console.log("Test increase");
    if (true) {
      this.setState((prevState) => ({
        mvp: [...prevState.prototype, this.state.mvp],
        prototype: []
      }));
      console.log("prototype", this.state.prototype);
    } else {
      console.log("end");
    }
  };

  pushForwardMap = (e, id) => {
    console.log("Test increase");
    if (true) {
      this.setState((prevState) => ({
        production: [...prevState.mvp, this.state.production],
        mvp: []
      }));
    } else {
      console.log("end");
    }
  };

  pushForwardProduction = (e, id) => {
    console.log("Test increase");
    if (true) {
      this.setState((prevState) => ({
        release: [...prevState.production, this.state.release],
        production: []
      }));
    } else {
      console.log("end");
    }
  };

  pushBackward = () => {};

  render() {
    // console.log("this.state.notes", this.state.notes);
    return (
      <div className="App">
        <form type="submit" onSubmit={this.handleSubmit}>
          <label>
            Add Note+
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleNote}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
        <div style={{ display: "flex" }}>
          <Board
            id={0}
            title="Prototype"
            pushForward={this.pushForwardPrototype}
            noteList={this.state.prototype}
          />
          <Board
            id={1}
            title="MVP build"
            pushForward={this.pushForwardMap}
            noteList={this.state.mvp}
          />
          <Board
            id={2}
            title="Production"
            pushForward={this.pushForwardProduction}
            noteList={this.state.production}
          />
          <Board id={3} title="Release Build" noteList={this.state.release} />
        </div>
      </div>
    );
  }
}
