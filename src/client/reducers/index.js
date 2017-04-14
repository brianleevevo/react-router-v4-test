import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import Login from './LoginReducer';
import Register from './RegisterReducer';

export default combineReducers({
  login: Login,
  register: Register
});
