import styled from 'styled-components';
import { outlined } from '../styles/outlined';

// Components
import { Title as ParentTitle } from '../Title';

export const Title = styled(ParentTitle)``;

export const Input = styled.input`
  ${outlined};
  width: 100%;
`;
