export const decorateObjMethods = (obj = {}, method = [], commonCallback = () => {}) => {
  const objReplace = { ...obj };

  const methods = Array.isArray(method) ? method : [method];

  methods.forEach(decorator => {
    const [methodName = '', callback = () => {}] = Array.isArray(decorator)
      ? decorator
      : [decorator];

    if (methodName) {
      const method = obj[methodName] || (() => {});

      objReplace[methodName] = (...args) => {
        const commonCallbackResult = commonCallback(...args);
        const callbackResult = callback(...args);
        const methodResult = method(...args);

        return commonCallbackResult ?? callbackResult ?? methodResult;
      };
    }
  });

  return objReplace;
};
