// Config
import { SVG_TYPE_VECTOR, SVG_TYPE_STROKE, SVG_TYPE_ALL } from 'config/svgTypes';

export const getSvgFileType = (fileName = '', divider = '-', ext = '.svg') => {
  const isVectorSvg = fileName.endsWith(`${divider}${SVG_TYPE_VECTOR}${ext}`);
  const isStrokeSvg = fileName.endsWith(`${divider}${SVG_TYPE_STROKE}${ext}`);
  const isAllSvg = fileName.endsWith(`${divider}${SVG_TYPE_ALL}${ext}`);

  return {
    svgType: isVectorSvg
      ? SVG_TYPE_VECTOR
      : isStrokeSvg
      ? SVG_TYPE_STROKE
      : isAllSvg
      ? SVG_TYPE_ALL
      : '',
    isVectorSvg,
    isStrokeSvg,
    isAllSvg,
  };
};
