import styled, { css } from 'styled-components';

export const P = styled.p`
  font-size: 18px;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
  `};
`;

export const RedP = styled(P)`
  color: red;
`;

export const Wrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;
