import './shim';

import React from 'react';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/components/navigator/BottomTabs';

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
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
