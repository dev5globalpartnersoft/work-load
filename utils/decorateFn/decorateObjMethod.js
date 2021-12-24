import { decorateFn } from './index';

export const decorateObjMethod = (
  obj = {},
  methodName = '',
  callback = () => {},
  copy = true
) => {
  const method = obj[methodName] || (() => {});

  if (copy) {
    return {
      ...obj,
      [methodName]: decorateFn(method, callback),
    };
  }

  return decorateFn(method, callback);
};
