import styled, { css } from 'styled-components';
import NextLink from 'next/link';

export const LinkWrapper = NextLink;

export const A = styled.a`
  display: inline-block;
  -webkit-user-drag: none;

  ${({ theme, $underlined, $hoverStyle, $disabled }) => css`
    color: ${theme.colors.black};

    ${$underlined &&
    css`
      text-decoration: underline;
      &:hover {
        text-decoration: underline;
      }
    `};

    ${$hoverStyle &&
    css`
      &:hover {
        color: ${theme.colors.secondary};
      }
    `};

    ${!$hoverStyle &&
    css`
      &:hover {
        color: ${theme.colors.black};
      }
    `};

    ${!$disabled &&
    css`
      cursor: pointer;
    `};
  `};
`;
