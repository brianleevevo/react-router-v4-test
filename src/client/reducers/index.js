import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

const initialState = { };

const reducer = (state = fromJS(initialState), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
