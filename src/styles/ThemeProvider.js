import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121"
    },
    danger: {
      main: "#ff3d00",
      text: "#212121",
      dark: "#b22a00"
    }
  }
}

const ThemeProvider = ({children}) =>(
  <StyledProvider theme={theme}>
    {children}
  </StyledProvider>
);

export default ThemeProvider;