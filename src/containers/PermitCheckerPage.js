import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PermitChecker from '../components/PermitChecker';
import PermitCheckerResults from '../components/PermitCheckerResults';
import * as PermitActions from '../actions/permitChecker';


function mapStateToProps({permitChecker: { plateQuery, isFetching, vehicle }}) {
    return {
        isFetching,
        plateQuery,
        vehicle
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    plateQuery_change: PermitActions.updatePlateQuery,
    checkPermit_click: PermitActions.checkPermit
  }, dispatch);
}

class PermitCheckerApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { plateQuery, isFetching, vehicle, plateQuery_change, checkPermit_click } = this.props;

    return (
      <div>
        <PermitChecker plateQuery={plateQuery} checkPermit_click={checkPermit_click} plateQuery_change={plateQuery_change} />

        <div>
          {isFetching && vehicle === null &&
            <h2>Loading...</h2>
          }
          {!isFetching && vehicle === null &&
            <h2>Empty.</h2>
          }
          {vehicle !== null &&
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <PermitCheckerResults vehicle={vehicle} />
            </div>
          }
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PermitCheckerApp);
