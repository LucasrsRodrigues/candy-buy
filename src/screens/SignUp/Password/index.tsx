import React from 'react';

import LogoSvg from '@assets/images/logo.svg';
import Doki from '@assets/images/doki-doki/doki-note.svg';

import LockSVG from '@assets/icons/lock.svg';

import * as S from './styles';
import { DokiButton } from '@components/DokiButton';
import { useNavigation } from '@react-navigation/native';
import { DokiInput } from '@components/DokiInput';

export function Password() {
  const { navigate, goBack } = useNavigation();

  return (
    <S.SignUpSafe>
      <S.SignUpContainer>
        <LogoSvg width={160} height={32} />
        <Doki width={250} height={250} />

        <S.SignUpWrapper>
          <S.SignUpTitle>Hi Shabhavi!</S.SignUpTitle>
          <S.SignUpText>Great, let’s choose a very strong password to keep your account safe from bad people out there </S.SignUpText>
        </S.SignUpWrapper>

        <DokiInput name="password" placeholder='Password' leftIcon={LockSVG} />

        <S.SignUpWrapper>
          <DokiButton label="Next" onPress={() => navigate('Phone')} />

          <S.SignUpButton onPress={goBack}>
            <S.SignUpButtonText>Go back</S.SignUpButtonText>
          </S.SignUpButton>
        </S.SignUpWrapper>
      </S.SignUpContainer>
    </S.SignUpSafe>
  );
}