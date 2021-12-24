import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bolder};
    font-size: ${theme.fontSizes.l};
    margin-bottom: 24px;
    display: block;

    ${theme.media.tablet} {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 16px;
    }
  `};
`;
