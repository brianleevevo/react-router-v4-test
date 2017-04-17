import { Register as C } from '../constants';

const validate = user => {
  const validation = {
    hasError: false,
    errors: { }
  };

  if (!user.username)
    validation.errors.username = 'Username is required';
  if (!user.email)
    validation.errors.email = 'Email is required';
  if (!user.firstName)
    validation.errors.firstName = 'First Name is required';
  if (!user.lastName)
    validation.errors.lastName = 'Last Name is required';
  if (!user.password)
    validation.errors.password = 'Password is required';
  if (!user.confirmPassword)
    validation.errors.confirmPassword = 'Confirm Password is required';
  else if (user.confirmPassword !== user.password)
    validation.errors.confirmPassword = 'Password does not match';

  validation.hasError = Object.keys(validation.errors).length > 0;

  return validation;
};

export const clear = () => ({ type: C.CLEAR });

export const change = updateProp => ({ type: C.CHANGE, payload: updateProp });

export const register = user => dispatch => {
  const validation = validate(user);
  if (validation.hasError)
    return dispatch({ type: C.INVALID, payload: validation });

  dispatch({ type: C.SAVE_PENDING });
};
