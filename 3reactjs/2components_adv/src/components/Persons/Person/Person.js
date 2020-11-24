import React, { Component, Fragment } from "react";
//import classes from "./Person.css";
//import Aux from "../../../hoc/Auxiliary";

class Person extends Component {
  render() {
    console.log("4.[Person.js] rendoring...");
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and i am {this.props.age}yo!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
      //inbuilt aux element from react v16.2
    );
  }
}

export default Person;
