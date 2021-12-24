import React, { forwardRef } from 'react';
import { StyledModal, ModalGlobalStyle } from './style.js';

// react-zoom-pan-pinch
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export const Modal = forwardRef(
  ({ imgWidth = undefined, imgMaxWidth = undefined, isPhoto = false, ...props }, ref) => {
    // console.log('imgWidth', imgWidth);
    // const { path } = props;
    return (
      <>
        <StyledModal
          visible={props.visible}
          ref={ref}
          footer={null}
          width={imgWidth}
          style={{ maxWidth: imgMaxWidth }}
          {...props}
        >
          {isPhoto ? (
            <TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0}>
              <TransformComponent>{props.children}</TransformComponent>
            </TransformWrapper>
          ) : (
            props.children
          )}
        </StyledModal>
        <ModalGlobalStyle />
      </>
    );
  }
);
