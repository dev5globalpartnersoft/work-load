import styled from 'styled-components';
import { filled } from '../styles/filled';
import { Link } from 'ui/Link';

export const StyledLink = styled(Link).attrs(() => ({
  hoverStyle: false,
  underlined: false,
}))`
  ${filled};
`;
