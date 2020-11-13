import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Henlo... </h1>
        <p>Working!</p>
        <Person />
      </div>
      
    );
  }
}

export default App;
