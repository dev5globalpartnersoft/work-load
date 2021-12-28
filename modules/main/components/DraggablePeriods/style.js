import styled, { css } from 'styled-components';
import { AntButton } from 'ui/buttons/AntButton';

export const NumText = styled.span`
  margin: 0 5px;
`;

export const Button = styled(AntButton)`
  padding: 0 10px;
`;

export const Drag = styled.div`
  height: inherit;
  width: 4px;
  background-color: #000;
`;

export const DragWrap = styled.div`
  z-index: 100;
  width: 16px;
  display: flex;
  justify-content: center;
  height: 90px;
  position: absolute;
  right: -8px;
  top: 0;
`;

export const Cell = styled.div`
  position: relative;
  height: inherit;
  text-align: center;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  font-weight: bold;
  font-size: 18px;
  transition: 500ms;
  user-select: none;

  :first-child {
    border-left: 2px solid #000;
  }

  :last-child {
    border-right: 2px solid #000;
  }

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $time }) => css`
    ${typeof $time !== 'undefined' &&
    css`
      :after {
        min-width: 32px;
        padding: 1px 10px;
        font-size: 12px;
        z-index: 100;
        content: '${$time}';
        position: absolute;
        bottom: -25px;
        left: -26px;
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
`;

export const Wrap = styled.div`
  margin-top: 40px;
  width: 99%;
  display: flex;
  align-items: center;
  height: 80px;
  position: relative;
  left: 4px;
`;
