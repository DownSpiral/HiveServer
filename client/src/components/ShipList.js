import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShip, removeShip } from '../actions/shipsActions';
import PropTypes from 'prop-types'

class ShipList extends Component {

  render() {
    return (
      <div className="ShipList">
        <ul>
          { this.props.ships.map( ship => (
              <li>
                { ship.shipName }
                <button onClick={ (e) => this.props.removeShip(ship.id) }>Remove</button>
              </li>
            )
          )}
        </ul>
        <button onClick={ (e) => this.props.addShip() }>Add Ship</button>
      </div>
    );
  }

}

ShipList.propTypes = {
  ships: PropTypes.arrayOf(PropTypes.object).isRequired,
  addShip: PropTypes.func.isRequired,
  removeShip: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ships: state.shipsReducer.ships
});
const mapDispatchToProps = dispatch => ({
  addShip: () => dispatch(addShip()),
  removeShip: (i) => dispatch(removeShip(i))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
