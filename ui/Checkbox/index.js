import React, { forwardRef } from 'react';
import { StyledCheckbox } from './style.js';

export const Checkbox = forwardRef((props, ref) => {
  return (
    <StyledCheckbox ref={ref} {...props}>
      {props.children}
    </StyledCheckbox>
  );
});
