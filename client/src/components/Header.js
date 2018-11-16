/*
 src/Header.js
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, changeEmailText, changePasswordText } from '../actions/userActions';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div>
          <form>
            <FormGroup
              controlId="emailText"
            >
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="text"
                value={ this.props.emailText }
                placeholder="Enter email"
                onChange={ (e) => this.props.changeEmailText(e.target.value) }
              />
            </FormGroup>
            <FormGroup
              controlId="passwordText"
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                value={ this.props.passwordText }
                placeholder="Enter password"
                onChange={ (e) => this.props.changePasswordText(e.target.value) }
              />
            </FormGroup>
          </form>
        </div>
        <button onClick={ (e) => this.props.login() }>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  emailText: state.emailText,
  passwordText: state.passwordText
});
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  changeEmailText: text => dispatch(changeEmailText(text)),
  changePasswordText: text => dispatch(changePasswordText(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
