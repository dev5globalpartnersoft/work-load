import styled from 'styled-components';

//UI
import { filled } from '../styles/filled';
import { SvgIcon } from 'ui/SvgIcon';

export const PlusIcon = styled(SvgIcon).attrs(() => ({
  name: 'plusOutlined',
  format: 'stroke',
}))`
  margin-right: 7px;
  --fill: #fff;
`;

export const StyledButton = styled.button`
  ${filled};
  :hover {
    color: #000;
  }
`;
