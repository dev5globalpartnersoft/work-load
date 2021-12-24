import { css } from 'styled-components';
import { input } from './input';

export const outlined = css`
  ${input};
  padding: 16px;

  ${({ theme }) => css`
    border: 1px solid #e5e7ea;
    border-radius: 12px;
    color: ${theme.colors.gray};
    background: ${theme.colors.white};

    :focus {
      border: 1px solid ${theme.colors.secondary};
    }

    ${theme.media.mobileM} {
      padding: 12px 16px;
    }
  `};
`;
