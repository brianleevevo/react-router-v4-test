export const createConstantsFromArray = (array, prefix = '') =>
  array.reduce((acc, curr) => {
    const constant = `${prefix}_${curr}`;
    return Object.assign({ [curr]: constant }, acc);
  }, { });

export const createAsyncConstants = constant =>
  [
    `${constant}_REQUEST`,
    `${constant}_SUCCESS`,
    `${constant}_ERROR`
  ];
