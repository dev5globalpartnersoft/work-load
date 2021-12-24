import { forwardRef } from 'react';

// Styles
import { StyledButton, PlusIcon } from './style';

export const ButtonIconFilled = forwardRef((props, ref) => (
  <StyledButton ref={ref} {...props}>
    <PlusIcon />
    {props.children}
  </StyledButton>
));
