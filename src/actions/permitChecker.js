import fetch from 'isomorphic-fetch'


export const UPDATE_PLATE_QUERY = 'UPDATE_PLATE_QUERY';
export function updatePlateQuery(plateQuery) {
  return {
    type: UPDATE_PLATE_QUERY,
    plateQuery
  };
}

export const CLEAR_PLATE_QUERY = 'CLEAR_PLATE_QUERY';
export function clearPlateQuery() {
  return {
    type: CLEAR_PLATE_QUERY
  };
}

export function checkPermit(plateQuery) {
  return dispatch => {
    dispatch(checkPermitRequest(plateQuery));

    return fetch(`http://localhost:81/PermitChecker/CheckPlateForPermit`, {method: 'post', body: {licenseplate: plateQuery}, credentials: 'same-origin'})
      .then(response => response.json())
      .then(json => json.status === 'pass' ? dispatch(checkPermitSuccess(plateQuery, json.data)) : dispatch(checkPermitFailure(plateQuery, json.message)))
      .catch(ex => console.log(ex));
  }
}

export const CHECK_PERMIT_REQ = 'CHECK_PERMIT_REQ';
export function checkPermitRequest(plateQuery, currentClientId = 1) {
  return {
    type: CHECK_PERMIT_REQ,
    currentClientId,
    plateQuery
  };
}

export const CHECK_PERMIT_FAIL = 'CHECK_PERMIT_FAIL';
export function checkPermitFailure(plateQuery, error = 'fffffuuuuuuuu') {
  return {
    type: CHECK_PERMIT_FAIL,
    plateQuery,
    error
  };
}

export const CHECK_PERMIT_SUCC = 'CHECK_PERMIT_SUCC';
export function checkPermitSuccess(plateQuery, vehicle = {}) {
  return {
    type: CHECK_PERMIT_SUCC,
    plateQuery,
    vehicle
  };
}
