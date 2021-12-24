import React, { forwardRef, useCallback } from 'react';

// Styles
import { LinkWrapper, A } from './style';

export const Link = React.memo(
  forwardRef(
    (
      {
        target = '_self',
        href = '',
        as,
        nextLink = {},
        prefetch = false,
        disabled = !href,
        disableClick,
        onClick,
        className,
        underlined = true,
        hoverStyle = true,
        ...props
      },
      ref
    ) => {
      const handleClick = useCallback(
        e => {
          if (disabled || disableClick) {
            e.preventDefault();
          }

          if (onClick) {
            onClick(e);
          }
        },
        [onClick, disabled, disableClick]
      );

      const _target = href?.target || target;

      return (
        <LinkWrapper href={href} as={as} prefetch={prefetch} passHref {...nextLink}>
          <A
            ref={ref}
            target={_target}
            onClick={handleClick}
            className={className}
            $disabled={disabled}
            $href={href}
            $underlined={underlined}
            $hoverStyle={hoverStyle}
            {...props}
          >
            {props.children}
          </A>
        </LinkWrapper>
      );
    }
  )
);
