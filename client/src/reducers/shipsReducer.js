/*
 src/reducers/shipsReducer.js
*/
export default (state = { ships: [] }, action) => {
  switch (action.type) {
    case 'ADD_SHIP':
      return {
        ...state,
        ships: [...state.ships, { shipName: action.shipName, id: action.id } ]
      }
    case 'REMOVE_SHIP':
      return {
        ...state,
        ships: state.ships.filter( ship => ship.id !== action.id )
      }
    default:
      return state
  }
}
