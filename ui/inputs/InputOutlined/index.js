import { forwardRef } from 'react';

// Styles
import { Input } from './style';

// Components
import { TopTitleWrap } from '../TopTitleWrap';

export const InputOutlined = forwardRef(({ className, title = '', ...props }, ref) => {
  return (
    <TopTitleWrap className={className} title={title}>
      <Input {...props} ref={ref} />
    </TopTitleWrap>
  );
});
