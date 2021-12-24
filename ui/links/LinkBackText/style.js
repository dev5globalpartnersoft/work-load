import styled from 'styled-components';

// UI
import { SvgIcon } from 'ui/SvgIcon';
import { Link } from 'ui/Link';

// Styles
import { backText } from '../styles/backText';

export const ArrowIcon = styled(SvgIcon).attrs(() => ({
  dir: '/icons/navigation',
  name: 'leftArrow',
}))``;

export const StyledLink = styled(Link)`
  ${backText};
`;
