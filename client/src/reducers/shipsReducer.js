/*
 src/reducers/shipsReducer.js
*/
export default (state = { ships: [] }, action) => {
  switch (action.type) {
    case 'ADD_SHIP':
      return {
        ...state,
        ships: [...state.ships, action.payload]
      }
    case 'REMOVE_SHIP':
      return {
        ...state,
        ships: [...state.ships, action.payload]
      }
    default:
      return state
  }
}
