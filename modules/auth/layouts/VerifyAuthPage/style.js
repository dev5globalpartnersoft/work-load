import styled from 'styled-components';

// Mixins
import { fullCenterColumn100 } from 'styles/mixins/flex/column/fullCenterColumn100';
import { maxWidthPadding } from 'styles/mixins/maxWidthPadding';

// UI
import { Spin as AntdSpin } from 'ui/Spin';
import { Result as AntdResult } from 'ui/Result';

export const Spin = styled(AntdSpin)`
  margin: 50px;
  font-size: 30px;
`;

export const Result = styled(AntdResult)``;

export const Wrap = styled.main`
  ${fullCenterColumn100};
  ${maxWidthPadding};
  text-align: center;
  padding-top: 50px;
  padding-bottom: 100px;
  flex: 1;
`;

export const Text = styled.h1`
  font-size: 35px;
`;
