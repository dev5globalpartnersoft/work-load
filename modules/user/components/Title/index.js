import styled, { css } from 'styled-components';

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.fontSizes.l};
    margin-bottom: 32px;
    font-weight: ${theme.fontWeights.bolder};
    ${theme.media.tablet} {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 16px;
    }
  `};
`;
