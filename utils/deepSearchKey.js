export const deepSearchKey = (obj, key) => {
  const _keys = typeof key === 'string' ? key.split('.') : Array.isArray(key) ? key : [];

  if (_keys.length <= 1) {
    if (_keys[0]) {
      return obj ? obj[_keys[0]] : '';
    } else {
      return obj;
    }
  } else {
    const newObj = obj ? obj[_keys[0]] : {};

    return deepSearchKey(newObj, _keys.splice(1));
  }
};

export default deepSearchKey;
