import styled from 'styled-components';
import { Link } from 'ui/Link';
import { fullUnderBordered } from '../styles/fullUnderBordered';

export const StyledLink = styled(Link).attrs(() => ({ underlined: false }))`
  ${fullUnderBordered};
`;
