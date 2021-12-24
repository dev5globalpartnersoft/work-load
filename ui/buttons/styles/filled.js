import { css } from 'styled-components';
import { button } from './button';

export const filled = css`
  ${button};

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors.main};
    color: ${theme.colors.white};
    background-color: ${theme.colors.main};
  `};
`;
