import React, { useEffect, useState } from 'react';
import { DokiInput } from '@components/DokiInput';
import { InternalHeader } from '@components/InternalHeader';

import profileSvg from '@assets/icons/profile.svg';
import emailSvg from '@assets/icons/email.svg';
import phoneSvg from '@assets/icons/Phone.svg';
import lockSvg from '@assets/icons/lock.svg';

import { DokiButton } from '@components/DokiButton';

import { useAuth } from 'src/hooks/auth.hook';

import * as S from './styles';

export function EditProfile() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, []);




  return (
    <S.EditProfileSafe>
      <S.EditProfileContainer>
        <InternalHeader label='Edit profile' />

        <S.EditProfileForm>
          <DokiInput name="name" placeholder='full name' leftIcon={profileSvg} value={user.name} />
          <DokiInput name="email" placeholder='email' leftIcon={emailSvg} value={user.email} />
          <DokiInput name="phone" placeholder='phone' leftIcon={phoneSvg} value={user.phone} />
          <DokiInput name="password" placeholder='password' leftIcon={lockSvg} value={user.password} secureTextEntry />
        </S.EditProfileForm>

        <DokiButton label='Save' />
      </S.EditProfileContainer>
    </S.EditProfileSafe>
  );
}