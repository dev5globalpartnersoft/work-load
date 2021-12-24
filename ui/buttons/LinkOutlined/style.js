import styled from 'styled-components';
import { outlined } from '../styles/outlined';
import { Link } from 'ui/Link';

export const StyledLink = styled(Link).attrs(() => ({
  hoverStyle: false,
  underlined: false,
}))`
  ${outlined};
`;
