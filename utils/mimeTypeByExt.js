export const MIME_TYPE_SVG = 'image/svg+xml';
export const MIME_TYPE_PNG = 'image/png';
export const MIME_TYPE_JPG = 'image/jpeg';

export const MIME_TYPES = {
  svg: MIME_TYPE_SVG,
  jpg: MIME_TYPE_JPG,
  jpeg: MIME_TYPE_JPG,
  png: MIME_TYPE_PNG,
};

export const mimeTypeByExt = (ext = '') => {
  if (MIME_TYPES.hasOwnProperty(ext)) {
    return MIME_TYPES[ext];
  }

  return ext;
};
