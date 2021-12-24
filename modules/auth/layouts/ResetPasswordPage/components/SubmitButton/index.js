import styled, { css } from 'styled-components';

// UI
import { ButtonFilledSpin } from 'ui/buttons/ButtonFilledSpin';

export const SubmitButton = styled(ButtonFilledSpin)`
  max-width: 509px;
  width: 100%;
  min-width: 48px;
  min-height: 56px;
  margin-bottom: 16px;
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  ${({ theme }) => css`
    ${theme.media.tablet} {
      padding: 12px 0;
      font-size: ${theme.fontSizes.xs};
      min-height: 48px;
    }
  `};
`;
