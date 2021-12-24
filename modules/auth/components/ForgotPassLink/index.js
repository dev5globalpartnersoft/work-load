import styled, { css } from 'styled-components';

// UI
import { Link } from 'ui/Link';

export const ForgotPassLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    display: block;
    margin-bottom: 32px;
    &:hover {
      text-decoration: none;
    }
    color: ${theme.colors.secondary};
    font-weight: ${theme.fontWeights.bolder};
    ${theme.media.mobileL} {
      display: inline-block;
      margin-bottom: 24px;
    }
  `};
`;
