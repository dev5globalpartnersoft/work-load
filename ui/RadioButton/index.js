import { forwardRef } from 'react';

// Styles
import { StyledRadio } from './style';

export const RadioButton = forwardRef((props, ref) => {
  return <StyledRadio ref={ref} {...props} />;
});
