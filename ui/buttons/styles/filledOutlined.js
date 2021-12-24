import { css } from 'styled-components';
import { button } from './button';

export const filledOutlined = css`
  ${button}

  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.stroke};
    color: ${theme.colors.gray50};
    background-color: ${theme.colors.white};
    padding: 0;
  `};
`;
