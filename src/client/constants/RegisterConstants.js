import { createConstantsFromArray, createAsyncConstants } from 'utils/Redux';

export default createConstantsFromArray([
  'CHANGE',
  'INVALID',
  ...createAsyncConstants('SAVE')
], 'REGISTER');
