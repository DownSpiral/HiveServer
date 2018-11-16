/*
 src/reducers/userReducer.js
*/
export default (state = { emailText: "", passwordText: "" }, action) => {
  switch (action.type) {
    case 'CHANGE_EMAIL_TEXT':
      return { ...state, emailText: action.text }
    case 'CHANGE_PASSWORD_TEXT':
      return { ...state, passwordText: action.text }
    default:
      return state
  }
}
