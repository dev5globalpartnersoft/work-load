import React, { forwardRef } from 'react';
import { StyledButton } from './style.js';

export const ButtonUnderBordered = forwardRef(({ ...props }, ref) => (
  <StyledButton ref={ref} {...props}>
    {props.children}
  </StyledButton>
));
