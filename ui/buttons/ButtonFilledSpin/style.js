import styled, { css } from 'styled-components';
import { filled } from '../styles/filled';

// UI
import { LoadingOutlinedSpin } from 'ui/Spin/LoadingOutlinedSpin';

export const StyledSpin = styled(LoadingOutlinedSpin)`
  position: absolute;
  height: 20px;
`;

export const ButtonFilled = styled.button`
  ${filled};
  position: relative;

  ${({ $isLoading }) => css`
    ${$isLoading &&
    css`
      opacity: 0.5;
    `};
  `};
`;
