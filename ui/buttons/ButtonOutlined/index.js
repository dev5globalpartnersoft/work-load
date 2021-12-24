import { forwardRef } from 'react';

// Styles
import { StyledButton } from './style';

export const ButtonOutlined = forwardRef((props, ref) => (
  <StyledButton ref={ref} {...props} />
));
