import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './themes';
import { Home } from './pages';
import CodePush from 'react-native-code-push';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes}>
      <Home />
    </ThemeProvider>
  );
};

export default CodePush()(App);
