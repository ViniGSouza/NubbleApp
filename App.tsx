import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Icon name="eyeOn" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
