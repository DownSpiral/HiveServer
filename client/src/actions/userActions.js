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

export const signup = () => {
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

export const changeLoginUsername = text => {
  return {
    type: 'CHANGE_LOGIN_USERNAME',
    text
  }
};

export const changeLoginPassword = text => {
  return {
    type: 'CHANGE_LOGIN_PASSWORD',
    text
  }
};

export const changeSignupUsername = text => {
  return {
    type: 'CHANGE_SIGNUP_USERNAME',
    text
  }
};
export const changeSignupEmail = text => {
  return {
    type: 'CHANGE_SIGNUP_EMAIL',
    text
  }
};
export const changeSignupPassword = text => {
  return {
    type: 'CHANGE_SIGNUP_PASSWORD',
    text
  }
};
export const changeSignupConfirmPassword = text => {
  return {
    type: 'CHANGE_SIGNUP_CONFIRM_PASSWORD',
    text
  }
};

export const openLoginModal = () => {
  return {
    type: 'OPEN_LOGIN_MODAL',
  };
}
export const closeLoginModal = () => {
  return {
    type: 'CLOSE_LOGIN_MODAL',
  };
}

export const openSignupModal = () => {
  return {
    type: 'OPEN_SIGNUP_MODAL',
  };
}
export const closeSignupModal = () => {
  return {
    type: 'CLOSE_SIGNUP_MODAL',
  };
}
