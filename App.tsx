import React from 'react';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import Main from './src/Main';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}

export default App;
