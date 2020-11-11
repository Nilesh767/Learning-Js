import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to NeoN</h1>
        </header>
        <p className="App-intro">
        </p>
        <p>
          Henlo!!! It's me man... Neo! Am learning *atleasting trying to* <b>React</b>
        </p>
      </div>
    );
  }
}

export default App;
