import styled from 'styled-components';

// Libs
import Upload from 'antd/lib/upload';
import 'antd/lib/upload/style/index.css';

export const StyledUpload = styled(Upload)``;

export const Wrap = styled.div`
  [class*='ant-upload-list ant-upload-list-picture-card'] {
    display: flex;
    justify-content: center;
  }
`;
