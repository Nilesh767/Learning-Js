import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Nilesh', age: 21 }, 
      { name: 'Other name', age: 20 },
      { name: 'some name', age: 12 }
    ],
    otherstate: 'some other state',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 }, 
        { name: 'Other name', age: 20 },
        { name: 'some name', age: 18 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Nilesh', age: 21 }, 
        { name: event.target.value, age: 20 },
        { name: 'some name', age: 18 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Henlo... </h1>
        <p>Working!</p>
        <button style={style}
          onClick={this.togglePersonsHandler} > Switch Name </button>
        {
          this.state.showPersons ? // IF-TRUE        --> ternary if operator
            <div>
              <Person
                name= {this.state.persons[0].name}
                age= {this.state.persons[0].age} />
              <Person
                name= {this.state.persons[1].name}
                age= {this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Neo')} 
                changed={this.nameChangeHandler} >My hobby: some hobby </Person>
              <Person
                name= {this.state.persons[2].name}
                age= {this.state.persons[2].age}  />
            </div>
          : null // IF-FALSE
        }
      </div>  
    );
  }
}
export default App;