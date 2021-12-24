import styled, { css } from 'styled-components';

const fillVector = css`
  fill: var(--fill);
  & > * {
    fill: var(--fill);
  }
`;

const fillStroke = css`
  stroke: var(--fill);

  & > * {
    stroke: var(--fill);
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  ${({ $fill, $all, $stroke, $vector, $transition, theme }) => css`
    transition: fill, stroke ${theme.transition?.[$transition]};
    & > * {
      transition: fill, stroke ${theme.transition?.[$transition]};
    }

    --fill: ${$fill};

    ${$all &&
    css`
      ${fillVector} ${fillStroke}
    `};

    ${$vector && fillVector};

    ${$stroke && fillStroke};
  `};
`;
