import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { Login as C } from '../constants';

const initialValidationState = {
  hasErrors: false,
  errors: { }
};

const validationReducer = (state = fromJS(initialValidationState), action) => {
  switch (action.type) {
  case C.INVALID:
    return fromJS(action.payload);
  default:
    return state;
  }
};

export default combineReducers({
  validation: validationReducer
});
