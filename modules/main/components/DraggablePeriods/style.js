import styled, { css } from 'styled-components';
import { AntButton } from 'ui/buttons/AntButton';

export const Button = styled(AntButton)`
  padding: 0 10px;
`;

export const Cell = styled.div`
  text-align: center;
  border: 2px solid #000;
  font-weight: bold;
  font-size: 18px;
  transition: 500ms;
  user-select: none;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > *:last-child {
    margin-left: 5px;
  }

  & > *:first-child {
    margin-right: 5px;
  }
  ${({ $time }) => css`
    ${typeof $time !== 'undefined' &&
    css`
      :after {
        padding: 1px 10px;
        font-size: 12px;
        z-index: 100;
        content: '${$time}';
        position: absolute;
        bottom: -25px;
        left: -16px;
        background-color: #000;
        border-radius: 10px;
        color: #fff;
      }
    `};
  `};
  ${({ $width }) => css`
    ${typeof $width !== 'undefined' &&
    css`
      width: ${$width}%;
    `};
  `};

  height: inherit;
`;

export const Wrap = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
`;
