import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import permitChecker from './permitChecker';


const rootReducer = combineReducers({
  permitChecker,
  routing,
});


export default rootReducer;
