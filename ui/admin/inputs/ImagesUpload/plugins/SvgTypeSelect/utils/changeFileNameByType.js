export const changeFileNameByType = (fileName = '', type = '') => {
  const texts = fileName.split('-');
  const [firstText = ''] = texts;

  if (texts.length > 1) {
    texts.pop();
    return `${texts.join('-')}-${type}`;
  } else {
    return `${firstText}-${type}`;
  }
};
