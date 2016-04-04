import React, { PropTypes } from 'react';


const PermitChecker = ({ plateQuery, checkPermit_click, plateQuery_change }) => (
  <div>
    <h2>Permit Checker</h2>
    <p> Enter a license plate to check if it has a valid permit</p>

    <div>
      <input id="license-plate" type="text" onChange={({target:{value: newPlateQuery }}) => plateQuery_change(newPlateQuery)} />
      <input id="check-permit" type="button" value="Check Plate" onClick={() => checkPermit_click(plateQuery)} />
    </div>
  </div>
);

PermitChecker.propTypes = {
    plateQuery: PropTypes.string,
    checkPermit_click: PropTypes.func.isRequired,
    plateQuery_change: PropTypes.func.isRequired
};


export {PermitChecker as default};
