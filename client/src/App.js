/*
 src/App.js
*/
import React, { Component } from 'react';
import ShipList from './components/ShipList';
import Header from './components/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <ShipList />
      </div>
    );
  }
}

export default App;
