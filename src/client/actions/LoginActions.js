import { Login as C } from '../constants';

const validate = (username, password) => {
  const errors = { };

  if (!username)
    errors.username = 'Username is required';
  if (!password)
    errors.password = 'Password is required';

  const hasErrors = Object.keys(errors).length > 0;

  return { hasErrors, errors };
};

export const invalid = validation => ({ type: C.INVALID, payload: validation });

export const change = updateProp => ({ type: C.CHANGE, payload: updateProp });

export const loginRequest = () => ({ type: C.LOGIN_REQUEST });
export const loginSuccess = () => ({ type: C.LOGIN_SUCCESS });
export const loginError = err => ({ type: C.LOGIN_ERROR, payload: err, error: true });

export const login = (username, password) => async dispatch => {
  const validation = validate(username, password);
  if (validation.hasErrors)
    return dispatch(invalid(validation));

  dispatch(loginRequest());

  return;
};
