import styled from 'styled-components';

// UI
import { ButtonOutlined } from 'ui/buttons/ButtonOutlined';

export const ActionButton = styled(ButtonOutlined)`
  border-width: 1px;
  padding: 5px 20px;
  transition: 200ms;

  :not(:first-child) {
    margin-left: 10px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
