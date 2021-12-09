import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './themes';
import { Home } from './pages';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes}>
      <Home />
    </ThemeProvider>
  );
};
