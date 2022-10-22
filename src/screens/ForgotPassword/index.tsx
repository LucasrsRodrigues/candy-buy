import React from 'react';

import LogoSvg from '@assets/images/logo.svg';

// import mailIcon from '@assets/icons/mail/mail.png';
// import lockIcon from '@assets/icons/lock/lock.png';

import ForgotPasswordChildSvg from '@assets/images/doki-doki/forgotPasswordChild.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import { DokiButton } from '@components/DokiButton';

import { DokiInput } from '@components/DokiInput';
import * as S from './styles';

export function ForgotPassword() {
  return (
    <S.ForgotPasswordSafe>
      <S.ForgotPasswordContainer>
        <LogoSvg width={RFValue(160)} height={RFValue(32)} />

        <S.ForgotPasswordLorem>
          <ForgotPasswordChildSvg width={RFValue(200)} height={RFValue(200)} />

          <S.ForgotPasswordLoremTitle>
            Forgot Password?
          </S.ForgotPasswordLoremTitle>
          <S.ForgotPasswordLoremText>
            Enter the email associated with your
            account to recieve the reset password link.
            It takes upto 5 minutes.
          </S.ForgotPasswordLoremText>
        </S.ForgotPasswordLorem>

        <S.ForgotPasswordForm>
          {/* <DokiInput
            name="email"
            leftIcon={mailIcon}
            placeholder='Email Address'
          /> */}
        </S.ForgotPasswordForm>

        <DokiButton label="Send Link" />

        <S.ForgotPasswordForgotButton>
          <S.ForgotPasswordForgotButtonText>Remember Password? Log In</S.ForgotPasswordForgotButtonText>
        </S.ForgotPasswordForgotButton>
      </S.ForgotPasswordContainer>
    </S.ForgotPasswordSafe>
  );
}