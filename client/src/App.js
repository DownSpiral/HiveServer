/*
 src/App.js
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShipList from './components/ShipList';
import { simpleAction } from './actions/simpleAction'
import './App.css';

class App extends Component {

  simpleAction = (event) => {
     this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <ShipList />
        <button onClick={ this.simpleAction }>Test redux action</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <pre>{ JSON.stringify(this.props) }</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
   ...state
});
const mapDispatchToProps = dispatch => ({
   simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
