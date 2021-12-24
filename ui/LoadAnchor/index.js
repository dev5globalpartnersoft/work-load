import { forwardRef } from 'react';

// Styles
import { Div } from './style';

export const LoadAnchor = forwardRef((props, ref) => <Div ref={ref} {...props} />);
