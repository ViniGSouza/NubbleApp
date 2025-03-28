import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack, AppStack} from '@routes';

export function Router() {
  const authenticated = true;

  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
