import styled, { css } from 'styled-components';
import Radio from 'antd/lib/radio';
import 'antd/lib/radio/style/index.css';

export const StyledRadio = styled(Radio)`
  ${({ theme }) => css`
    [class*='ant-radio-inner'],
    [class*='ant-radio ant-radio-checked'] {
      border-color: #19c372 !important;
      ::after {
        background-color: #19c372;
        border: 1px solid #19c372;
      }
    }
  `};
`;
