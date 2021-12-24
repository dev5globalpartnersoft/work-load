import styled, { css } from 'styled-components';

// UI
import { Checkbox } from 'ui/Checkbox';

export const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 16px;
  ${({ theme }) => css`
    align-items: flex-end;
    margin-right: 40px;
    margin-left: 0 !important;
    :nth-child(4) {
      margin-right: 0;
    }

    ${theme.media.mobileM} {
      margin-bottom: 12px;

      margin-right: 0;
    }
  `};
`;

export const Title = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

export const LabelWrap = styled.label`
  width: min-content;
  display: flex;
  align-items: center;
`;
