import styled, { css } from 'styled-components';

export const GrayText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin: 0 6px 10px 0;
    display: inline-block;
    ${theme.media.mobileL} {
      display: none;
    }
  `};
`;

export const BlackText = styled.p`
  text-align: center;
  display: block;
  margin-bottom: 16px;
  padding-top: 16px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xs};
    border-top: 1px solid ${theme.colors.stroke};
  `};
`;
