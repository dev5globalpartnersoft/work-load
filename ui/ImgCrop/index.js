import { forwardRef } from 'react';

// Styles
import { StyledImgCrop, GlobalStyles } from './style';

export const ImgCrop = forwardRef(({ shape = 'round', ...props }, ref) => {
  return (
    <>
      <GlobalStyles />
      <StyledImgCrop ref={ref} shape={shape} {...props}>
        {props.children}
      </StyledImgCrop>
    </>
  );
});
