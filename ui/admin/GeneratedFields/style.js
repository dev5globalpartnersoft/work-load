import styled, { css } from 'styled-components';

export const Stub = styled.div``;

export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:first-child) {
    margin-top: 40px;
  }

  ${({ $count = 1 }) => css`
    & > * {
      width: calc(${`${100 / $count}%`} - ${`10px`});
    }

    @media (max-width: ${`${$count * 270}px`}) {
      & > * {
        width: 100%;
        :not(:first-child) {
          margin-top: 20px;
        }
      }

      flex-direction: column;
    }
  `};
`;
