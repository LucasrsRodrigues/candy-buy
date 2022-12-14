import React from 'react';

import LogoSvg from '@assets/images/logo.svg';

import mailIcon from '@assets/icons/email.svg';
import lockIcon from '@assets/icons/lock.svg';

import LoginChildSvg from '@assets/images/doki-doki/loginChild.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import { DokiButton } from '@components/DokiButton';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'src/hooks/auth.hook';
import { DokiInput } from '@components/DokiInput';

export function Login() {
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const loginFunction = async () => {
    await signIn({
      email: 'email@email.com',
      password: '123456'
    });
  };

  return (
    <S.LoginSafe>
      <S.LoginContainer>
        <LogoSvg width={RFValue(160)} height={RFValue(32)} />

        <S.LoginLorem>
          <LoginChildSvg width={RFValue(200)} height={RFValue(200)} />

          <S.LoginLoremTitle>
            Welcome Back
          </S.LoginLoremTitle>
          <S.LoginLoremText>
            Create an account to enjoy fast{'\n'}
            delivery at no extra cost :)
          </S.LoginLoremText>
        </S.LoginLorem>

        <S.LoginForm>
          <DokiInput
            name="email"
            leftIcon={mailIcon}
            placeholder='Email Address'
          />

          <DokiInput
            name="password"
            secureTextEntry={true}
            leftIcon={lockIcon}
            placeholder='Password'
          />

          <S.LoginForgotButton>
            <S.LoginForgotButtonText>Forgot Password?</S.LoginForgotButtonText>
          </S.LoginForgotButton>
        </S.LoginForm>

        <DokiButton label="Login" onPress={loginFunction} />

        <S.LoginForgotButton onPress={() => navigate('SignUpFullName')}>
          <S.LoginForgotButtonText>Don't have an account? Sign Up</S.LoginForgotButtonText>
        </S.LoginForgotButton>
      </S.LoginContainer>
    </S.LoginSafe>
  );
}