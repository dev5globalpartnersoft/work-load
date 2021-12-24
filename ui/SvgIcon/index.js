import { forwardRef, useMemo } from 'react';
import 'external-svg-loader';

// Config
import { SVG_TYPE_VECTOR, SVG_TYPE_STROKE, SVG_TYPE_ALL } from 'config/svgTypes';

// Utils
import { getSvgFileType } from 'utils/getSvgFileType';

// Styles
import { Svg } from './style';

export const SvgIcon = forwardRef(
  (
    {
      dir = '/icons',
      name = '',
      format = 'auto', // vector, stroke, all, auto
      fill = '',
      transition = 'short',
      active = false,
      src = `${dir}/${name}.svg`,
      ...props
    },
    ref
  ) => {
    const _format = useMemo(() => {
      if (format === 'auto') {
        return getSvgFileType(src)?.svgType;
      }

      return format;
    }, [format, src]);

    return (
      <Svg
        $transition={transition}
        $all={_format === SVG_TYPE_ALL}
        $stroke={_format === SVG_TYPE_STROKE}
        $vector={_format === SVG_TYPE_VECTOR}
        $fill={fill}
        $active={active}
        data-loding="lazy"
        data-src={src}
        ref={ref}
        {...props}
      />
    );
  }
);
