import { forwardRef } from 'react';

// Styles
import { StyledLink } from './style';

export const LinkFilled = forwardRef((props, ref) => <StyledLink ref={ref} {...props} />);
