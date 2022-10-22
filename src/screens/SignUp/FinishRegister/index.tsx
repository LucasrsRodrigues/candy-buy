import React from 'react';

import LogoSvg from '@assets/images/logo.svg';
import Doki from '@assets/images/doki-doki/doki-like.svg';

// import phoneIcon from '@assets/icons/phone/phone.png';

import * as S from './styles';
import { Dokinput } from '@components/DokInput';
import { DokiButton } from '@components/DokiButton';
import { useNavigation } from '@react-navigation/native';

export function FinishRegister() {
  const { navigate, goBack } = useNavigation();

  return (
    <S.FinishRegisterSafe>
      <S.FinishRegisterContainer>
        <LogoSvg width={160} height={32} />

        <S.FinishRegisterWrapper>
          <Doki width={250} height={250} />

          <S.FinishRegisterWrapper>
            <S.FinishRegisterTitle>All Done</S.FinishRegisterTitle>
            <S.FinishRegisterText>You’re now ready to explore the magical world of Doki Doki. Tasty candies are waiting inside.</S.FinishRegisterText>
          </S.FinishRegisterWrapper>
        </S.FinishRegisterWrapper>

        <S.FinishRegisterWrapper>
          <DokiButton label="Let's go" onPress={() => navigate('Code')} />
        </S.FinishRegisterWrapper>
      </S.FinishRegisterContainer>
    </S.FinishRegisterSafe>
  );
}