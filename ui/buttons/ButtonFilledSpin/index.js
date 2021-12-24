import { forwardRef } from 'react';

// Styles
import { ButtonFilled, StyledSpin } from './style';

export const ButtonFilledSpin = forwardRef(
  ({ isLoading = false, loadingContent = '', disabled = false, ...props }, ref) => {
    return (
      <ButtonFilled
        disabled={isLoading || disabled}
        $isLoading={isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <StyledSpin />
            {loadingContent}
          </>
        ) : (
          props.children
        )}
      </ButtonFilled>
    );
  }
);
