import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  
  // static getDerivedStateFromProps(state, props){
  //   console.log('a.[Persons.js] getDerivedStateFromProps', props);
  //   return state;
  // } just commented out bcoz throwing error but working

  shouldComponentUpdate(nextProps, nextState) {
    console.log('b.[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('d.[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('e.[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  
  render() {
    console.log("c.4.[Persons.js] rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
