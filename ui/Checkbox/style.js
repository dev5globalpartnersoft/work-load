import styled, { css } from 'styled-components';
import AntdCheckbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/index.css';

export const StyledCheckbox = styled(AntdCheckbox)`
  ${({ theme }) => css`
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${theme.colors.main};
      border-color: ${theme.colors.main};
    }
    .ant-checkbox-checked::after {
      border: 1px solid ${theme.colors.main};
    }
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border-color: ${theme.colors.main};
    }
    .ant-checkbox-inner {
      width: 20px;
      height: 20px;
    }
    .ant-checkbox-inner::after {
      width: 7px;
      height: 12px;
    }
    .ant-checkbox + span {
      color: ${theme.colors.gray};
    }
  `};
`;
