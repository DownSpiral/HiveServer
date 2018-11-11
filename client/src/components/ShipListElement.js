import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { removeShip } from '../actions/shipsActions';

class Ship extends Component {

  render() {
    return (
      <li key={ this.props.id }>
        <div>
          { this.props.name }
          <button onClick={ (e) => this.props.removeShip(this.props.id) }>Remove</button>
        </div>
      </li>
    );
  }

}

Ship.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  removeShip: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  removeShip: (i) => dispatch(removeShip(i))
});

export default connect(null, mapDispatchToProps)(Ship);
