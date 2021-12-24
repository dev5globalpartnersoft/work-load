import { css } from 'styled-components';
import 'antd/lib/select/style/index.css';
import 'antd/lib/spin/style/index.css';

export const antSelect = css`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};

    height: 52px;
    [class*='ant-select-selector'] {
      border-radius: inherit !important;
      height: inherit !important;
    }
    [class*='ant-select-selection-placeholder'],
    [class*='ant-select-selection-search'],
    [class*='ant-select-selection-item'] {
      display: flex;
      align-items: center;
    }
  `};
`;
