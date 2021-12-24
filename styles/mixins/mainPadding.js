import { css } from 'styled-components';

export const mainPadding = css`
  ${({ theme }) => css`
    padding: 0 ${theme.paddings.m};

    ${theme.media.mobileS} {
      padding: 0 ${theme.paddings.s};
    }
  `};
`;
