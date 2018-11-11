/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import shipsReducer from './shipsReducer';
export default combineReducers({
  simpleReducer,
  shipsReducer
});
