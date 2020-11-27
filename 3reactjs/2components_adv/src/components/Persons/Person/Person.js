import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    console.log("4.[Person.js] rendoring...");
    return (
      <Aux>  
        <p onClick={this.props.click}>
          I'm {this.props.name} and i am {this.props.age}yo!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);
