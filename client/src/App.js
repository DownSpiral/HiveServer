/*
 src/App.js
*/
import React, { Component } from 'react';
import ShipList from './components/ShipList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ShipList />
      </div>
    );
  }
}

export default App;
