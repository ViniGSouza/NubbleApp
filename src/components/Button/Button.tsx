import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading, ...touchableOpacityBoxProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      {...touchableOpacityBoxProps}
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      justifyContent="center"
      alignItems="center"
      borderRadius="s16"
    >
      {loading ? <ActivityIndicator color="#FFF" /> :
      <Text preset="paragraphMedium" bold style={{color: '#FFF'}}>
        {title}
      </Text>}

    </TouchableOpacityBox>
  );
}
