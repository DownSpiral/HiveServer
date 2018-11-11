import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShip, removeShip } from '../actions/shipsActions';

class ShipList extends Component {

  render() {
    return (
      <div className="ShipList">
        { this.props.ships ? (
        <ul>
          { this.props.ships.map(ship => (<li>{ ship }</li>)) }
        </ul>)
        : (<p>"wat"</p>) }
        <button onClick={ (e) => this.props.addShip() }>Add Ship</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ships: state.ships
});
const mapDispatchToProps = dispatch => ({
  addShip: () => dispatch(addShip()),
  removeShip: () => dispatch(removeShip())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShipList);
