import { forwardRef } from 'react';

// Styles
import { StyledButton } from './style';

export const ButtonFilledOutlined = forwardRef((props, ref) => (
  <StyledButton ref={ref} {...props} />
));
