import styled, { css } from 'styled-components';

export const TabWrap = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ddd;
  color: #000;
  cursor: pointer;
  user-select: none;
  ${({ $active }) => css`
    ${$active &&
    css`
      background-color: #000;
      color: #fff;
    `};
  `}};
  
  ${({ $disabled }) => css`
    ${$disabled &&
    css`
      background-color: #ddd;
      cursor: default;
    `};
  `};

  :not(:first-child) {
    margin-left: 5px;
  }
`;

export const Wrap = styled.div`
  display: flex;
`;
