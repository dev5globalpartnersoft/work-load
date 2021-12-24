import { css } from 'styled-components';

export const maxWidth = css`
  ${({ theme }) => css`
    max-width: ${theme.maxWidth};
  `};
`;
