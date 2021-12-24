import styled from 'styled-components';

// Mixins
import { fullCenterColumn100 } from 'styles/mixins/flex/column/fullCenterColumn100';
import { maxWidthPadding } from 'styles/mixins/maxWidthPadding';

export const Wrap = styled.form`
  ${fullCenterColumn100};
  ${maxWidthPadding};
  flex: 1;
`;

export const Title = styled.h1`
  margin: 20px;
`;
