import styled from 'styled-components';

// Mixins
import { vCenterRow } from 'styles/mixins/flex/row/vCenterRow';

// Components
import { AntSelect } from '../../../../../selects/AntSelect';

export const Select = styled(AntSelect)`
  width: 100%;
  height: 32px;
`;

export const Title = styled.div`
  margin-right: 5px;
`;

export const Wrap = styled.div`
  ${vCenterRow};
`;
