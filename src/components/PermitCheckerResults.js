import React, { Component, PropTypes } from 'react';


export default class PermitCheckerResults extends Component {
  static propTypes = {
    vehicle: PropTypes.object,
    error: PropTypes.string,
    isFetching: PropTypes.bool
  };

  render() {
    const { isFetching, vehicle, error } = this.props;

    return (
    <div>
      <div id="error">{error}</div>
      <p>{vehicle.licensePlate}</p>
    </div>
    );
  }
}
