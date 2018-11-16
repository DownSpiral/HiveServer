/*
 src/Header.js
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {
  login, signup,
  changeLoginUsername, changeLoginPassword,
  changeSignupUsername, changeSignupEmail,
  changeSignupPassword, changeSignupConfirmPassword,
  openLoginModal, closeLoginModal,
  openSignupModal, closeSignupModal
} from '../actions/userActions';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={ (e) => this.props.openLoginModal() }
        >Login
        </Button>

        <Modal
          show={ this.props.isLoginModalOpen }
          onHide={ () => this.props.closeLoginModal() }
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="login">
              <form>
                <FormGroup
                  controlId="username"
                >
                  <ControlLabel>Username</ControlLabel>
                  <FormControl
                    type="text"
                    value={ this.props.loginUsername }
                    placeholder="Enter username"
                    onChange={ (e) => this.props.changeLoginUsername(e.target.value) }
                  />
                </FormGroup>
                <FormGroup
                  controlId="passwordText"
                >
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    type="password"
                    value={ this.props.loginPassword }
                    placeholder="Enter password"
                    onChange={ (e) => this.props.changeLoginPassword(e.target.value) }
                  />
                </FormGroup>
              </form>
            </div>
            <button onClick={ (e) => this.props.login() }>Login</button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ () => this.props.closeLoginModal() }>Close</Button>
          </Modal.Footer>
        </Modal>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={ (e) => this.props.openSignupModal() }
        >Signup
        </Button>

        <Modal
          show={ this.props.isSignupModalOpen }
          onHide={ () => this.props.closeSignupModal() }
        >
          <Modal.Header closeButton>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="signup">
              <form>
                <FormGroup
                  controlId="username"
                >
                  <ControlLabel>Username</ControlLabel>
                  <FormControl
                    type="text"
                    value={ this.props.signupUsername }
                    placeholder="Enter a username"
                    onChange={ (e) => this.props.changeSignupUsername(e.target.value) }
                  />
                </FormGroup>
                <FormGroup
                  controlId="emailText"
                >
                  <ControlLabel>Email</ControlLabel>
                  <FormControl
                    type="text"
                    value={ this.props.signupEmail }
                    placeholder="Enter an email"
                    onChange={ (e) => this.props.changeSignupEmail(e.target.value) }
                  />
                </FormGroup>
                <FormGroup
                  controlId="passwordText"
                >
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    type="password"
                    value={ this.props.signupPassword }
                    placeholder="Enter password"
                    onChange={ (e) => this.props.changeSignupPassword(e.target.value) }
                  />
                </FormGroup>
                <FormGroup
                  controlId="confirmPasswordText"
                >
                  <ControlLabel>Confirm Password</ControlLabel>
                  <FormControl
                    type="password"
                    value={ this.props.signupConfirmPassword }
                    placeholder="Confirm password"
                    onChange={ (e) => this.props.changeSignupConfirmPassword(e.target.value) }
                  />
                </FormGroup>
              </form>
            </div>
            <button onClick={ (e) => this.props.signup() }>Signup</button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ (e) => this.props.closeSignupModal() }>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginUsername: state.userReducer.loginUsername,
  loginPassword: state.userReducer.loginPassword,

  signupEmail: state.userReducer.signupEmail,
  signupUsername: state.userReducer.signupUsername,
  signupPassword: state.userReducer.signupPassword,
  signupConfirmPassword: state.userReducer.signupConfirmPassword,

  isLoginModalOpen: state.userReducer.isLoginModalOpen,
  isSignupModalOpen: state.userReducer.isSignupModalOpen
});
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  signup: () => dispatch(signup()),
  changeLoginUsername: text => dispatch(changeLoginUsername(text)),
  changeLoginPassword: text => dispatch(changeLoginPassword(text)),

  changeSignupUsername: text => dispatch(changeSignupUsername(text)),
  changeSignupEmail: text => dispatch(changeSignupEmail(text)),
  changeSignupPassword: text => dispatch(changeSignupPassword(text)),
  changeSignupConfirmPassword: text => dispatch(changeSignupConfirmPassword(text)),

  openLoginModal: () => dispatch(openLoginModal()),
  closeLoginModal: () => dispatch(closeLoginModal()),
  openSignupModal: () => dispatch(openSignupModal()),
  closeSignupModal: () => dispatch(closeSignupModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
