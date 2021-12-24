import React, { forwardRef } from 'react';
import { StyledLink } from './style.js';

export const LinkUnderBordered = forwardRef(({ ...props }, ref) => (
  <StyledLink ref={ref} {...props}>
    {props.children}
  </StyledLink>
));
