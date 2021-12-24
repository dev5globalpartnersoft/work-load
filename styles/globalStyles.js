import { createGlobalStyle, css } from 'styled-components';
import 'antd/lib/style/index.css';

export const GlobalStyles = createGlobalStyle`
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  input,
  button,
  textarea,
  select,
  a,
  img {
    all: unset;
  }
  
  ${({ theme }) => css`
    body {
      font-family: DM Sans, serif;
      color: ${theme.colors.black};
      font-size: ${theme.fontSizes.s};
    }

    input,
    button,
    textarea,
    a {
      box-sizing: border-box;
    }

    #__next {
      position: relative;
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.fontWeights.bold};
    }
  `};
  
`;
