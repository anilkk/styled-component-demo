import React from 'react';
import { render } from 'react-dom';
import { space, width, fontSize, color } from 'styled-system';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
Box.displayName = 'Box';

const App = () => (
  <ThemeProvider theme={theme}>
    <Box p={40} bg="whites.10" color="orange">
      This is a Box
    </Box>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
