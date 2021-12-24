import styled, { css } from 'styled-components';

// UI
import { AntdTable } from 'ui/AntdTable';
import 'antd/lib/radio/style/index.css';

export const StyledTable = styled(AntdTable)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `};

  [class*='ant-table-content'] {
    min-height: 332px;
  }

  [class*='ant-pagination ant-table-pagination'] {
    padding: 0 20px;
  }
`;

export const Wrap = styled.div`
  margin-top: 50px;
  width: 100%;
`;
