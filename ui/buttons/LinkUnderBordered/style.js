import styled from 'styled-components';
import { Link } from 'ui/Link';
import { underBordered } from '../styles/underBordered';

export const StyledLink = styled(Link).attrs(() => ({ underlined: false }))`
  ${underBordered};
`;
