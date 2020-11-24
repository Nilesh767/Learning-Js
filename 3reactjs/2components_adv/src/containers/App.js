import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Lifecycle hooks");
    console.log("1.[App.js] constructor");
  }

  state = {
    persons: [
      { id: "1", name: "Nilesh", age: 21 },
      { id: "a", name: "Other name", age: 20 },
      { id: "2b", name: "some name", age: 12 },
    ],
    otherstate: "some other state",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("2.[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("5.[App.js] ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("[App.js] should component update");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js]Component did update");
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((per) => {
      return per.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
        //uses old state to change the current state
        //bcoz normally state doesn't refresh simultaneously and takes time
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("3.[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({
              showCockpit: false,
            });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
  }
}
export default withClass(App, classes.App);
