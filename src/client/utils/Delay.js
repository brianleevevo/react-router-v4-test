export default (func, timeoutMs = 2000) => new Promise((resolve, reject) =>
  setTimeout(() => resolve(func), timeout);
);
