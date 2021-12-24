import React, { useMemo, forwardRef } from 'react';
import { ImageWrapper } from './style';
import NextImage from 'next/image';

export const Image = React.memo(
  forwardRef(
    (
      {
        width = 200,
        height = 200,
        className = '',
        layout = 'fill',
        objectFit = 'cover',
        objectPosition,

        path = '',
        dir = '/images',
        name = '',
        ext = '',
        fullPath = `${path ? path : `${dir}/${name}${ext}`}`,
        src = '',

        activeDir = dir,
        activeName = '',
        activePath = '',
        activeExt = '',
        fullActivePath = `${
          activePath ? activePath : `${activeDir}/${activeName}${activeExt}`
        }`,

        active = false,
        ...props
      },
      ref
    ) => {
      const sizeProps = useMemo(() => {
        if (layout === 'fill') {
          return {
            objectFit,
            objectPosition,
          };
        }

        let intWidth = parseInt(width);
        let intHeight = parseInt(height);

        return {
          width: isNaN(intWidth) ? width : intWidth,
          height: isNaN(intHeight) ? height : intHeight,
        };
      }, [width, height, layout, objectFit, objectPosition]);

      const activeSrc = activeName || activePath ? fullActivePath : '';

      return (
        <ImageWrapper className={className} ref={ref}>
          <NextImage
            src={active ? activeSrc : src || fullPath}
            alt={name}
            layout={layout}
            {...sizeProps}
            {...props}
          />
          {props.children}
        </ImageWrapper>
      );
    }
  )
);
