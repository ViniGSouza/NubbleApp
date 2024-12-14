import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import { ThemeProvider } from '@shopify/restyle';
import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';


function App(): React.JSX.Element {

  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text preset="headingLarge" italic>
          Coffstack
        </Text>

        <Button title="Entrar" marginBottom="s12" />

        <Button loading title="Loading" />
      </View>
    </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
