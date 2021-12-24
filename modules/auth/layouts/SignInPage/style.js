import styled from 'styled-components';

// UI
import { Checkbox } from 'ui/Checkbox';

export const Wrap = styled.form`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  padding: 124px 20px 0 20px;
  flex: 1;
`;

export const SignInCheckbox = styled(Checkbox)`
  margin-bottom: 24px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
  font-size: 17px;
`;
