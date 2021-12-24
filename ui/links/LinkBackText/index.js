import { forwardRef } from 'react';

// Styles
import { StyledLink, ArrowIcon } from 'ui/links/LinkBackText/style';

export const LinkBackText = forwardRef((props, ref) => (
  <StyledLink ref={ref} {...props}>
    <ArrowIcon /> {props.children}
  </StyledLink>
));
