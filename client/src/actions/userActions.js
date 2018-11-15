/*
 src/actions/userActions.js
*/
import axios from 'axios';

export const login = () => {
  return (dispatch, getState) => {
    //get the user's login info from the store
    const state = getState().userReducer;
    const user = { email: state.emailText, password: state.passwordText };
    //ask the server if the credentials are ok
    axios.post("http://ericw-appliance-rdqrpqhkdd.dynamic-m.com:3000/login", { user })
    .then(res => {
      dispatch({ type: 'LOGIN', res });
    }).catch(err => {
      dispatch({ type: 'LOGIN_FAILED', err });
    });
  }
}

export const changeEmailText = text => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_EMAIL_TEXT',
      text
    });
  }
}

export const changePasswordText = text => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_PASSWORD_TEXT',
      text
    });
  }
}
