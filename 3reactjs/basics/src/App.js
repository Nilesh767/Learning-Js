import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
    // const persons = this.state.persons.slice();
     //copy persons to a new obj, slice to copy(as js have array as reference type )
    const persons = [...this.state.persons]; //ES6 method (spread operator)
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Nilesh", age: 21 },
        { name: event.target.value, age: 20 },
        { name: "some name", age: 18 },
      ], 
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
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
                    />
          })}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Neo")}
            changed={this.nameChangeHandler}> My hobby: some hobby
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>Henlo... </h1>
        <p>Working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}
export default App;