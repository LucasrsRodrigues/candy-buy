import React from 'react';
import { Dokinput } from '@components/DokInput';

import LogoSvg from '@assets/images/logo.svg';

import mailIcon from '@assets/icons/mail/mail.png';
import lockIcon from '@assets/icons/lock/lock.png';

import LoginChildSvg from '@assets/images/doki-doki/loginChild.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import { DokiButton } from '@components/DokiButton';

import * as S from './styles';

export function Login() {
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
          <Dokinput
            name="email"
            leftIcon={mailIcon}
            placeholder='Email Address'
          />

          <Dokinput
            name="password"
            secureTextEntry={true}
            leftIcon={lockIcon}
            placeholder='Password'
          />

          <S.LoginForgotButton>
            <S.LoginForgotButtonText>Forgot Password?</S.LoginForgotButtonText>
          </S.LoginForgotButton>
        </S.LoginForm>

        <DokiButton label="Login" />

        <S.LoginForgotButton>
          <S.LoginForgotButtonText>Don't have an account? Sign Up</S.LoginForgotButtonText>
        </S.LoginForgotButton>
      </S.LoginContainer>
    </S.LoginSafe>
  );
}