import React from 'react';

import LogoSvg from '@assets/images/logo.svg';

import EmailSentChildSvg from '@assets/images/doki-doki/emailSentChild.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import { DokiButton } from '@components/DokiButton';

import * as S from './styles';

export function EmailSent() {
  return (
    <S.EmailSentSafe>
      <S.EmailSentContainer>
        <LogoSvg width={RFValue(160)} height={RFValue(32)} />

        <S.EmailSentLorem>
          <EmailSentChildSvg width={RFValue(200)} height={RFValue(200)} />

          <S.EmailSentLoremTitle>
            Email Sent
          </S.EmailSentLoremTitle>
          <S.EmailSentLoremText>
            We’ve sent a password reset link to sn***ri@gmail.com. Please check the spam folder also :)
          </S.EmailSentLoremText>
        </S.EmailSentLorem>

        <DokiButton label="Back to Login" />

        <S.EmailSentForgotButton>
          <S.EmailSentForgotButtonText>Contact Us</S.EmailSentForgotButtonText>
        </S.EmailSentForgotButton>
      </S.EmailSentContainer>
    </S.EmailSentSafe>
  );
}