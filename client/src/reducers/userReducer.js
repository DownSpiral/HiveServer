/*
 src/reducers/userReducer.js
*/
export default (state = { emailText: "", passwordText: "" }, action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_USERNAME':
      return { ...state, loginUsername: action.text }
    case 'CHANGE_LOGIN_PASSWORD':
      return { ...state, loginPassword: action.text }

    case 'CHANGE_SIGNUP_USERNAME':
      return { ...state, signupUsername: action.text }
    case 'CHANGE_SIGNUP_EMAIL':
      return { ...state, signupEmail: action.text }
    case 'CHANGE_SIGNUP_PASSWORD':
      return { ...state, signupPassword: action.text }
    case 'CHANGE_SIGNUP_CONFIRM_PASSWORD':
      return { ...state, signupConfirmPassword: action.text }

    case 'OPEN_LOGIN_MODAL':
      return { ...state, isLoginModalOpen: true }
    case 'CLOSE_LOGIN_MODAL':
      return { ...state, isLoginModalOpen: false }
    case 'OPEN_SIGNUP_MODAL':
      return { ...state, isSignupModalOpen: true }
    case 'CLOSE_SIGNUP_MODAL':
      return { ...state, isSignupModalOpen: false }

    default:
      return state
  }
}
