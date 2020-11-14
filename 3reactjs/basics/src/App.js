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
    otherstate: 'some other state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 }, 
        { name: 'Other name', age: 20 },
        { name: 'some name', age: 18 }
      ]
    });
  }


  render () {
    return (
      <div className="App">
        <h1>Henlo... </h1>
        <p>Working!</p>
        <button onClick={() => this.switchNameHandler('Nileeee')}>Switch Name</button> // Not recommended
        <Person
          name= {this.state.persons[0].name}
          age= {this.state.persons[0].age} />
        <Person
          name= {this.state.persons[1].name}
          age= {this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Neo')} >My hobby: some hobby </Person> //Recommended
        <Person
          name= {this.state.persons[2].name}
          age= {this.state.persons[2].age}  />
      </div>  
    );
  }
}
export default App;