import React from 'react';

import LogoSvg from '@assets/images/logo.svg';
import Doki from '@assets/images/doki-doki/forgotPasswordChild.svg';

import phoneIcon from '@assets/icons/phone/phone.png';

import * as S from './styles';
import { DokiButton } from '@components/DokiButton';
import { useNavigation } from '@react-navigation/native';
import { DokiInput } from '@components/DokiInput';

export function Phone() {
  const { navigate, goBack } = useNavigation();

  return (
    <S.SignUpSafe>
      <S.SignUpContainer>
        <LogoSvg width={160} height={32} />
        <Doki width={250} height={250} />

        <S.SignUpWrapper>
          <S.SignUpTitle>And Your Mobile</S.SignUpTitle>
          <S.SignUpText>Share your number with us, but we don’t share it with anyone else</S.SignUpText>
        </S.SignUpWrapper>

        <DokiInput name="phone" placeholder='Ex. (11) 999999999' leftIcon={phoneIcon} />

        <S.SignUpWrapper>
          <DokiButton label="Next" onPress={() => navigate('Code')} />

          <S.SignUpButton onPress={goBack}>
            <S.SignUpButtonText>Go back</S.SignUpButtonText>
          </S.SignUpButton>
        </S.SignUpWrapper>
      </S.SignUpContainer>
    </S.SignUpSafe>
  );
}