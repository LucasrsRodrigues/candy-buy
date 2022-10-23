import React from 'react';
import { DokiInput } from '@components/DokiInput';
import { InternalHeader } from '@components/InternalHeader';

import profileSvg from '@assets/icons/profile.svg';
import emailSvg from '@assets/icons/email.svg';
import phoneSvg from '@assets/icons/Phone.svg';
import lockSvg from '@assets/icons/lock.svg';

import * as S from './styles';
import { DokiButton } from '@components/DokiButton';

export function EditProfile() {
  return (
    <S.EditProfileSafe>
      <InternalHeader label='Edit profile' />

      <S.EditProfileContainer>
        <DokiInput name="name" placeholder='full name' leftIcon={profileSvg} />
        <DokiInput name="email" placeholder='email' leftIcon={emailSvg} />
        <DokiInput name="phone" placeholder='phone' leftIcon={phoneSvg} />
        <DokiInput name="password" placeholder='password' leftIcon={lockSvg} />

        <DokiButton label='Save' />
      </S.EditProfileContainer>
    </S.EditProfileSafe>
  );
}