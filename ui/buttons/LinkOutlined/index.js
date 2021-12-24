import { forwardRef } from 'react';

// Styles
import { StyledLink } from './style';

export const LinkOutlined = forwardRef((props, ref) => (
  <StyledLink ref={ref} {...props} />
));
