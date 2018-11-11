import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShip } from '../actions/shipsActions';
import PropTypes from 'prop-types'
import Ship from './ShipListElement.js';

class ShipList extends Component {

  render() {
    let ships = this.props.ships.map( ship => (
      <Ship key={ ship.id } name={ ship.shipName } id={ ship.id }/>
    ));
    return (
      <div className="ShipList">
        <ul>{ ships }</ul>
        <button onClick={ (e) => this.props.addShip() }>Add Ship</button>
      </div>
    );
  }

}

ShipList.propTypes = {
  ships: PropTypes.arrayOf(PropTypes.object).isRequired,
  addShip: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ships: state.shipsReducer.ships
});
const mapDispatchToProps = dispatch => ({
  addShip: () => dispatch(addShip()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
