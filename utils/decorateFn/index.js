export const decorateFn =
  (method = () => {}, callback = () => {}) =>
  (...args) => {
    const callbackResult = callback(...args);
    const methodResult = method(...args);
    return callbackResult ?? methodResult;
  };
