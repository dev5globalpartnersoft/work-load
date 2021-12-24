import styled, { css } from 'styled-components';
import { GrayText as GrayTextStyled } from 'modules/auth/components/Paragraphs';

export const Wrap = styled.form`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  padding: 82px 20px 0 20px;
  flex: 1;
  margin-top: 16px;
`;

export const GrayText = styled(GrayTextStyled)`
  ${({ theme }) => css`
    ${theme.media.mobileL} {
      display: inline-block;
      font-size: ${theme.fontSizes.xs};
    }
  `};
`;
