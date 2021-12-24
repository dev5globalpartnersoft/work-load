import { forwardRef } from 'react';

// Styles
import { StyledSelect } from './style';

export const SelectInput = forwardRef((props, ref) => {
  return <StyledSelect {...props} ref={ref} />;
});
