import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Henlo... </h1>
        <p>Working!</p>
        <Person name='Nilesh' age='21' />
        <Person name='other name' age='20'>My hobby: some hobby</Person>
        <Person name='some name' age='12' />
      </div>
      
    );
  }
}

export default App;
