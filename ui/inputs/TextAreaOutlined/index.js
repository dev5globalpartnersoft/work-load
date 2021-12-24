import { forwardRef } from 'react';

// Styles
import { Area } from './style';

export const TextAreaOutlined = forwardRef((props, ref) => <Area ref={ref} {...props} />);
