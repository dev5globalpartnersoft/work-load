import styled, { css } from 'styled-components';
import { PasswordInputOutlined } from 'ui/inputs/PasswordInputOutlined';

export const PasswordInput = styled(PasswordInputOutlined).attrs(
  ({ rules = {} } = {}) => ({
    name: 'password',
    rules: {
      minLength: 8,
      required: true,
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
