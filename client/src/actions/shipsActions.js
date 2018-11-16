/*
 src/actions/shipsActions.js
*/

let shipID = 0;

export const addShip = () => dispatch => {
  let id = shipID + 1;
  dispatch({
    type: 'ADD_SHIP',
    shipName: "Ship" + id,
    id
  });
  shipID = id;
}

export const removeShip = (i) => dispatch => {
  dispatch({
    type: 'REMOVE_SHIP',
    id: i
  })
}
