import styled, { css } from 'styled-components';

// UI
import { AllergiesSelect as UIAllergiesSelect } from 'ui/AllergiesSelect/formHook';

export const Wrap = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 24px;
    display: block;
    ${theme.media.tablet} {
      font-size: ${theme.fontSizes.s};
      margin-bottom: 16px;
    }
  `};
`;

export const AllergiesSelect = styled(UIAllergiesSelect)`
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-bottom: 32px;
  ${({ theme }) => css`
    ${theme.media.mobileM} {
      margin-bottom: 24px;
    }
    ${theme.media.mobileM} {
      grid-template-columns: repeat(2, 1fr);
    }
  `};
`;
