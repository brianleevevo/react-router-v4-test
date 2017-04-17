import { createConstantsFromArray, createAsyncConstants } from 'utils/Redux';

export default createConstantsFromArray([
  'INVALID',
  'CLEAR',
  ...createAsyncConstants('LOGIN')
], 'LOGIN');
