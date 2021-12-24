export const dataToURL = (data = {}) => {
  return Object.keys(data)
    .map(key => {
      let value = data[key];

      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    })
    .join('&');
};
