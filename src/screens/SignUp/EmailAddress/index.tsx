import React from 'react';

import LogoSvg from '@assets/images/logo.svg';
import Doki from '@assets/images/doki-doki/doki-note.svg';

import fullNameIcon from '@assets/icons/full_name/full_name.png';

import * as S from './styles';
import { DokiButton } from '@components/DokiButton';
import { useNavigation } from '@react-navigation/native';
import { DokiInput } from '@components/DokiInput';

export function EmailAddress() {
  const { navigate, goBack } = useNavigation();

  return (
    <S.SignUpSafe>
      <S.SignUpContainer>
        <LogoSvg width={160} height={32} />
        <Doki width={250} height={250} />

        <S.SignUpWrapper>
          <S.SignUpTitle>Hi Shambhavi!</S.SignUpTitle>
          <S.SignUpText>You’ve got such a nice name. Now, let’s start with some important ones. I am noting these details in my diary</S.SignUpText>
        </S.SignUpWrapper>

        <DokiInput name="full_name" placeholder='Email Address' leftIcon={fullNameIcon} />

        <S.SignUpWrapper>
          <DokiButton label="Next" onPress={() => navigate('Password')} />

          <S.SignUpButton onPress={goBack}>
            <S.SignUpButtonText>Go back</S.SignUpButtonText>
          </S.SignUpButton>
        </S.SignUpWrapper>
      </S.SignUpContainer>
    </S.SignUpSafe>
  );
}