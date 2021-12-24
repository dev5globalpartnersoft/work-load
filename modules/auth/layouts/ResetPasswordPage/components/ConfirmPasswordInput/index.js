import styled, { css } from 'styled-components';
import { PasswordInputOutlined } from 'ui/inputs/PasswordInputOutlined';

export const ConfirmPasswordInput = styled(PasswordInputOutlined).attrs(
  ({ rules = {}, currentPassword } = {}) => ({
    name: 'confirmPassword',
    rules: {
      minLength: 8,
      required: true,
      validate: value => value === currentPassword || 'The password do not match',
      ...rules,
    },
    baseTPath: 'formErrors.password',
  })
)`
  ${({ theme }) => css`
    max-width: 509px;
    display: block;
    width: 100%;
    margin-top: 24px;
    input {
      min-height: 56px;
      width: 100%;
    }

    ${theme.media.tablet} {
      margin-top: 16px;
      font-size: ${theme.fontSizes.xs};

      input {
        min-height: 48px;
      }
    }
  `};
`;
