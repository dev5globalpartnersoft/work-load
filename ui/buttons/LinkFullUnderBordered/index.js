import React, { forwardRef } from 'react';
import { StyledLink } from './style.js';

export const LinkFullUnderBordered = forwardRef(({ ...props }, href, ref) => (
  <StyledLink href={href} ref={ref} {...props}>
    {props.children}
  </StyledLink>
));
