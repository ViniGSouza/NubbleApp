import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {TextInput} from './src/components/TextInput/TextInput';
import {theme} from './src/theme/theme';
import {Icon} from './src/components/icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text mb="s8" preset="headingLarge">
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            errorMessage="E-mail inválido."
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{marginBottom: 's20'}}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{marginBottom: 's10'}}
          />

          <Text preset="paragraphSmall" color="primary" bold>
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" preset="outline" mt="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
