import React from 'react';

import LogoSvg from '@assets/images/logo.svg';
import Doki from '@assets/images/doki-doki/loginChild.svg';

import ProfileSVG from '@assets/icons/profile.svg';

import * as S from './styles';
import { DokiButton } from '@components/DokiButton';
import { useNavigation } from '@react-navigation/native';
import { DokiInput } from '@components/DokiInput';

export function FullName() {
  const { navigate } = useNavigation();

  return (
    <S.SignUpSafe>
      <S.SignUpContainer>
        <LogoSvg width={160} height={32} />
        <Doki width={250} height={250} />

        <S.SignUpWrapper>
          <S.SignUpTitle>Welcome to Doki Doki</S.SignUpTitle>
          <S.SignUpText>Let’s start with the basic details. First things first, what sould we call you</S.SignUpText>
        </S.SignUpWrapper>

        <DokiInput name="full_name" placeholder='Full Name' leftIcon={ProfileSVG} />

        <S.SignUpWrapper>
          <DokiButton label="Next" onPress={() => navigate('EmailAddress')} />

          <S.SignUpButton onPress={() => navigate('Login')}>
            <S.SignUpButtonText>Already registered? Login</S.SignUpButtonText>
          </S.SignUpButton>
        </S.SignUpWrapper>
      </S.SignUpContainer>
    </S.SignUpSafe>
  );
}