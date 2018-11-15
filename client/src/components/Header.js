/*
 src/Header.js
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <button onClick={ (e) => this.props.login() }>Login</button>
      </div>
    );
  }
}

//const mapStateToProps = state => ({
//});
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
});

export default connect(null, mapDispatchToProps)(Header);
