import styled, { css } from 'styled-components';

// UI
import { ButtonFilledSpin } from 'ui/buttons/ButtonFilledSpin';

export const SubmitButton = styled(ButtonFilledSpin)`
  max-width: 602px;
  width: 100%;
  min-width: 48px;
  min-height: 56px;
  margin-bottom: 64px;
  cursor: pointer;
  position: relative;
  margin-top: 32px;
  ${({ theme, disabled }) => css`
    ${({ disabled }) =>
      disabled &&
      css`
        border-color: ${theme.colors.grayLight};
        background-color: ${theme.colors.gray};
      `};
    ${theme.media.tablet} {
      padding: 12px 0;
      font-size: ${theme.fontSizes.xs};
      min-height: 48px;
    }
  `};
`;
