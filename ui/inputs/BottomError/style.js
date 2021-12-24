import styled, { css } from 'styled-components';

export const Message = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  color: #c61d1e;
  font-weight: 500;
  font-size: 15px;
`;

export const Wrap = styled.div`
  position: relative;
`;

export const WrapInput = styled.div`
  ${({ message }) => css`
    ${message} {
      border: 1px solid red;
      border-radius: 12px;
      :focus {
        border: 1px solid red;
      }
    }
  `};
`;
