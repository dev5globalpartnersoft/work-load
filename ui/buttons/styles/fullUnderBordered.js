import { css } from 'styled-components';
import { underBordered } from './underBordered';

export const fullUnderBordered = css`
  font-weight: 100 !important;
  color: #7e7f82;
  ::after {
    left: 0 !important;
    width: 100%;
  }
  :hover {
    font-weight: 600 !important;
    color: #000;
  }
  ${underBordered};
  @media screen and (max-width: 768px) {
    &::after {
      content: '';
    }
  }
`;
