import styled, { css } from 'styled-components';

// UI
import { Link } from 'ui/Link';

export const AuthLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
    color: ${theme.colors.secondary};
    font-weight: ${theme.fontWeights.bolder};
    ${theme.media.mobileL} {
      margin-right: 20px;
    }
  `};
`;
