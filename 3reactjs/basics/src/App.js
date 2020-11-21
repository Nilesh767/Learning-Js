import React, { Component } from "react";
import styled from 'styled-components';
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
      background-color: green;
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: lightgreen;
        color: black;
      }
`;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Nilesh", age: 21 },
      { id: 'a',name: "Other name", age: 20 },
      { id: '2b', name: "some name", age: 12 },
    ],
    otherstate: "some other state",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                     click={() => this.deletePersonHandler(index)}
                     name={person.name} 
                     age={person.age}
                     key={person.id}
                     changed={(event) => this.nameChangeHandler(event, person.id)}
                    />
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');// red
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');// red + bold
    }

    return (
        <div className="App">
          <h1>Henlo... hooman!!!</h1>
          <p className={classes.join(' ')}>Working! :)</p>
          <StyledButton onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
          {persons}
        </div>
    );
  }
}
export default App;