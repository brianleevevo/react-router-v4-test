import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import { Login as C } from '../constants';

const initialValidationState = {
  hasErrors: false,
  errors: { }
};

const initialState = {
  isSaving: false,
  data: {
    username: '',
    password: ''
  },
  validation: initialValidationState
};

export default (state = fromJS(initialState), action) => {
  switch (action.type) {
  case C.INVALID:
    return state.merge({
      validation: action.payload
    });
  case C.LOGIN_REQUEST:
    return state.merge({
      validation: initialValidationState,
      isSaving: true
    });
  case C.LOGIN_SUCCESS:
    return state.merge({
      isSaving: false
    });
  case C.LOGIN_ERROR:
    return state.merge({
      isSaving: false
    });
  case C.CHANGE:
    return state.merge({
      data: state.get('data').merge(action.payload)
    });
  default:
    return state;
  }
};
