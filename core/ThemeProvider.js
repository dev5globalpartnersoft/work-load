import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Styles
import { whiteTheme } from 'styles/themes/white';
import { GlobalStyles } from 'styles/globalStyles';

export const ThemeProvider = props => {
  return (
    <StyledThemeProvider theme={whiteTheme}>
      <GlobalStyles />
      {props.children}
    </StyledThemeProvider>
  );
};
