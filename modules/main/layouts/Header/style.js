import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
  `};
`;
