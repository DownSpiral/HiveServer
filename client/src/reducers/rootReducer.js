/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import shipsReducer from './shipsReducer';
import userReducer from './userReducer';
export default combineReducers({
  shipsReducer,
  userReducer
});
