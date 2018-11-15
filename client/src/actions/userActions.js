/*
 src/actions/userActions.js
*/
import axios from 'axios';

export const login = () => {
  return (dispatch, getState) => {
    //get the user's login info from the store
    //const state = getState();
    const state = { email: "brent@cool.com", password: "password" };
    const user = { email: state.email, password: state.password };
    //ask the server if the credentials are ok
    axios.post("http://ericw-appliance-rdqrpqhkdd.dynamic-m.com:3000/login", { user })
    .then(res => {
      dispatch({ type: 'LOGIN', res });
    }).catch(err => {
      dispatch({ type: 'LOGIN_FAILED', err });
    });
  }
}
