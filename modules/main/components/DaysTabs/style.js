import styled, { css } from 'styled-components';

export const TabWrap = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ddd;
  color: #000;
  ${({ $active }) => css`
    ${$active &&
    css`
      background-color: #000;
      color: #fff;
    `};
  `}};
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
