export const callActionFn = (fn, ...args) => {
  if (typeof fn === 'function') {
    return fn(...args);
  }

  return {};
};
