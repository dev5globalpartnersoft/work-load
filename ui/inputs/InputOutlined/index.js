import { forwardRef } from 'react';

// Styles
import { Input } from './style';

export const InputOutlined = forwardRef((props, ref) => {
  return <Input {...props} ref={ref} />;
});
