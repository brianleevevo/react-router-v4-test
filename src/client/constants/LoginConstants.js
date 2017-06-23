import { createConstantsFromArray, createAsyncConstants } from 'utils/Redux';

export default createConstantsFromArray([
  'INVALID',
  'CLEAR',
  'CHANGE',
  ...createAsyncConstants('LOGIN')
], 'LOGIN');
