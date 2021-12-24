import styled, { css } from 'styled-components';
import { EmailInputOutlined } from 'ui/inputs/EmailInputOutlined';

export const EmailInput = styled(EmailInputOutlined).attrs(() => ({
  name: 'email',
  rules: { required: true },
  baseTPath: 'formErrors.email',
}))`
  width: 100%;
  max-width: 509px;
  input {
    ${({ theme }) => css`
      display: block;
      width: 100%;
      min-height: 56px;
      ${theme.media.tablet} {
        min-height: 48px;
        font-size: ${theme.fontSizes.xs};
      }
    `};
  }
`;
