import styled from 'styled-components';

// UI
import { Spin } from 'ui/Spin';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const LoadPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  position: relative;
`;

export const StyledSpin = styled(Spin)`
  position: absolute;
  height: 20px;
`;
