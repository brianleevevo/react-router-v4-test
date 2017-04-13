import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import Login from './LoginReducer';

export default combineReducers({
  login: Login
});
