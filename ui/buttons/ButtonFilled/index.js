import { forwardRef } from 'react';

// Styles
import { StyledButton } from './style';

export const ButtonFilled = forwardRef((props, ref) => (
  <StyledButton ref={ref} {...props} />
));
