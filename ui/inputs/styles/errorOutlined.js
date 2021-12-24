import { css } from 'styled-components';

export const errorOutlined = css`
  ${({ $isError }) =>
    $isError &&
    css`
      border: 2px solid #ca0909;
      :focus {
        border: 2px solid #ca0909;
      }
    `};
`;
