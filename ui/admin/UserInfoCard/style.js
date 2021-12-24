import styled, { css } from 'styled-components';

export const P = styled.p``;

export const Wrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  font-size: 24px;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
    background-color: ${theme.colors.white};
  `};
`;
