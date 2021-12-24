import { css } from 'styled-components';
import { fullCenterRow } from 'styles/mixins/flex/row/fullCenterRow';

export const button = css`
  ${fullCenterRow};
  padding: 17px 0;
  cursor: pointer;
  ${({ theme, disabled }) => css`
    font-weight: ${theme.fontWeights.bolder};

    ${disabled &&
    css`
      cursor: default;
    `};
  `};
`;
