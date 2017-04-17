import { createConstantsFromArray, createAsyncConstants } from 'utils/Redux';

export default createConstantsFromArray([
  'CLEAR',
  'CHANGE',
  'INVALID',
  ...createAsyncConstants('SAVE')
], 'REGISTER');
