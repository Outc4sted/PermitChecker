import {
    UPDATE_PLATE_QUERY, CLEAR_PLATE_QUERY, CHECK_PERMIT_REQ, CHECK_PERMIT_FAIL, CHECK_PERMIT_SUCC
} from '../actions/permitChecker';

const initialState = {
    isFetching: false,
    plateQuery: '',
    vehicle: null
};

export default function permitChecker(state = initialState, action) {
    console.log('action ' , action);
    switch (action.type) {
        case UPDATE_PLATE_QUERY:
          return Object.assign({}, state, {
            plateQuery: action.plateQuery
          });

        case CLEAR_PLATE_QUERY:
          return Object.assign({}, state, {
            plateQuery: ''
          });

        case CHECK_PERMIT_REQ:
          return Object.assign({}, state, {
            plateQuery: action.plateQuery,
            isFetching: true,
            vehicle: null
          });

        case CHECK_PERMIT_FAIL:
          return Object.assign({}, state, {
            isFetching: false,
            vehicle: null
          });

        case CHECK_PERMIT_SUCC:
          return Object.assign({}, state, {
            isFetching: false,
            vehicle: action.vehicle
          });

        default:
          return state;
    }
}
