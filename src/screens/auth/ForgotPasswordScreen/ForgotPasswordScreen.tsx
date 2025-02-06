import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Button} from '../../../components/Button/Button';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {RootStackParamList} from '../../../routes/Routes';
import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';
import {LoginSchema} from '../LoginScreen/loginSchema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  const submitForm = ({email}: LoginSchema) => {
    console.log(email);
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  };

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para recuperação de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
