import styled, { css } from 'styled-components';

// UI
import { Link } from 'ui/Link';

export const SignInLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
    margin-bottom: 32px;
    color: ${theme.colors.secondary};
    font-weight: ${theme.fontWeights.bolder};
    ${theme.media.mobileL} {
      margin-right: 20px;
      margin-bottom: 24px;
    }
  `};
`;
