import React, { forwardRef } from 'react';
import { StyledExample } from './style.js';

export const Example = forwardRef(({ ...props }, ref) => (
  <StyledExample ref={ref} {...props}>
    {props.children}
  </StyledExample>
));
