import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Nilesh', age: 21 }, 
      { name: 'Other name', age: 20 },
      { name: 'some name', age: 12 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Henlo... </h1>
        <p>Working!</p>
        <button>Switch name</button>
        <Person name= {this.state.persons[0].name} age= {this.state.persons[0].age} />
        <Person name= {this.state.persons[1].name} age= {this.state.persons[1].age} >My hobby: some hobby</Person>
        <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}  />
      </div>
      
    );
  }
}

export default App;
