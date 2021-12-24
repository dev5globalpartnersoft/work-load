import styled, { css } from 'styled-components';

// UI
import { CheckboxGroup } from 'ui/CheckboxGroup';

const valueInTransform = v => (typeof v === 'string' && v ? v.split(',') : []);
const valueOutTransform = v => (Array.isArray(v) ? v.join(',') : '');

export const StyledCheckboxGroup = styled(CheckboxGroup).attrs(() => ({
  valueInTransform,
  valueOutTransform,
}))`
  ${({ theme }) => css`
    ${theme.media.mobileL} {
      display: flex;
      flex-direction: column;
    }
  `}
`;
export const Wrap = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 27px;
    display: block;
    ${theme.media.tablet} {
      font-size: ${theme.fontSizes.s};
      margin-bottom: 18px;
    }
  `};
`;
