import { css } from 'styled-components';
import { maxWidth } from './maxWidth';
import { mainPadding } from 'styles/mixins/mainPadding';

export const maxWidthPadding = css`
  ${maxWidth};
  ${mainPadding};
`;
