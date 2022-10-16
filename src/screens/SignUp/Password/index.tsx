import React from 'react';

import LogoSvg from '@assets/images/logo.svg';
import Doki from '@assets/images/doki-doki/doki-note.svg';

import lockIcon from '@assets/icons/lock/lock.png';

import * as S from './styles';
import { Dokinput } from '@components/DokInput';
import { DokiButton } from '@components/DokiButton';
import { useNavigation } from '@react-navigation/native';

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

        <Dokinput name="password" placeholder='Password' leftIcon={lockIcon} />

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