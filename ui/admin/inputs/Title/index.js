import styled, { css } from 'styled-components';

export const Title = styled.div`
  margin-bottom: 5px;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
  `};
`;
