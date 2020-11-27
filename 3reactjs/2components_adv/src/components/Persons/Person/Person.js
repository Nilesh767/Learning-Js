import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    //this.inputElement.focus();   ----> Old Method
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("4.[Person.js] rendoring...");
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please Log In</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and i am {this.props.age}yo!
        </p>
        <p>{this.props.children}</p>
        <input
          //ref={(inputEl) => {this.inputElement = inputEl}} ---> Old Method
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
