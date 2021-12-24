import styled, { createGlobalStyle, css } from 'styled-components';

// ant Design
import AntdModal from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css';

export const StyledModal = styled(AntdModal)``;

export const ModalGlobalStyle = createGlobalStyle`
${({ theme, $photo }) => css`
  .ant-modal-content {
    border-radius: 24px;
  }

  .ant-modal-close-x {
    color: ${theme.colors.black};
    font-size: 21px;
  }

  .ant-modal-close {
    right: 1.5%;
    top: 2%;
  }

  ${theme.media.mobileM} {
    .ant-modal-close {
      right: 0;
      top: 0;
    }
  }
  ${$photo &&
  css`
    .ant-modal-body {
      padding: 0;
    }
    .ant-modal-content {
      background: none;
      box-shadow: none;
      background-clip: none;
    }

    .ant-modal-close-x {
      display: none;
    }
  `}
`};
`;
