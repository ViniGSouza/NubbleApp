import React from 'react';

import {Text, Screen, Icon, Button} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  const goBackToBegin = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text mt="s24" preset="headingLarge">
        {route.params.title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button mt="s40" onPress={goBackToBegin} title="Voltar ao início" />
    </Screen>
  );
}
