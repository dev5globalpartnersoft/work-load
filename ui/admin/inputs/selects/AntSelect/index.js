import { forwardRef } from 'react';

// Styles
import { StyledSelect } from './style';

export const AntSelect = forwardRef((props, ref) => {
  return <StyledSelect ref={ref} {...props} />;
});
