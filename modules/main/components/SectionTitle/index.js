import styled, { css } from 'styled-components';

export const SectionTitle = styled.h1`
  margin-top: 100px;
  margin-bottom: 64px;
  display: block;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};

    ${theme.media.laptop} {
      margin-top: 40px;
      margin-bottom: 24px;
    }

    ${theme.media.tablet} {
      font-size: ${theme.fontSizes.md};
    }
  `};
`;
