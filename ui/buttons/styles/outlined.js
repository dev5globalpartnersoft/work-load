import { css } from 'styled-components';
import { button } from './button';

export const outlined = css`
  ${button};

  ${({ theme }) => css`
    background-color: #fff;
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors.main};
    color: ${theme.colors.main};

    ${({ disabled }) =>
      disabled &&
      css`
        border-color: ${theme.colors.grayLight};
        color: ${theme.colors.gray};
      `};
  `};
`;
