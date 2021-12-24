import { css } from 'styled-components';

export const underBordered = css`
  display: inline-block;
  position: relative;

  ${({ theme }) => css`
    cursor: pointer;
    transition: 0.3s;
    font-weight: ${theme.fontWeights.bold};
    &::after {
      content: '';
      border-radius: ${theme.borderRadius};
      display: block;
      position: absolute;
      left: 30%;
      right: 100%;
      bottom: -15px;
      height: 3px;
      background: ${theme.colors.secondary};
      opacity: 0;
      transition: 0.3s;
    }
    &:focus {
      outline: none;
    }
    &:hover,
    &.current {
      &::after {
        opacity: 1;
        right: 30%;
      }
    }
    @media screen and (max-width: 768px) {
      &::after {
        content: none;
      }
    }
  `};
`;
