export const changeFileName = (originalFile = {}, newName = '') => {
  return new File([originalFile], newName, {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
};
