import { fromJS } from 'immutable';
import { Register as C } from '../constants';

const initialValidationState = {
  hasError: false,
  errors: { }
};

const initialState = {
  isSaving: false,
  user: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  },
  validation: initialValidationState
};

export default (state = fromJS(initialState), action) => {
  switch (action.type) {
    case C.CHANGE:
      return state.merge({
        data: state.get('data').merge(action.payload)
      });
    case C.INVALID:
      return state.merge({
        validation: fromJS(action.payload)
      });
    case C.SAVE_PENDING:
      return state.merge({
        isSaving: true,
        validation: fromJS(initialValidationState)
      });
    default:
      return state;
  }
};
