import styled, { css } from 'styled-components';
import { GrayText as GrayTextStyled } from '../Paragraphs';

// UI
import { Link } from 'ui/Link';

export const TermsStyledLink = styled(Link)`
  ${({ theme }) => css`
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
    display: inline;
    font-weight: ${theme.fontWeights.bolder};
    ${theme.media.mobileM} {
      font-size: ${theme.fontSizes.xs2};
    }
  `};
`;

export const Wrap = styled.div`
  margin-bottom: 24px;
`;

export const GrayText = styled(GrayTextStyled)`
  ${({ theme }) => css`
    ${theme.media.mobileL} {
      display: inline-block;
      font-size: ${theme.fontSizes.xs2};
    }
  `};
`;
