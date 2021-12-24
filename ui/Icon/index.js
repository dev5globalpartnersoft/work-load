import { forwardRef } from 'react';

// Styles
import { StyledImage } from './style';

export const Icon = forwardRef((props, ref) => (
  <StyledImage
    ref={ref}
    dir="/icons"
    objectFit="contain"
    width={20}
    height={20}
    {...props}
  >
    {props.children}
  </StyledImage>
));
