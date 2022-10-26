import { DokiButton } from '@components/DokiButton';
import { DokiInput } from '@components/DokiInput';
import { InternalHeader } from '@components/InternalHeader';
import React from 'react';

import * as S from './styles';

export function EditAddress() {
  return (
    <S.EditAddressSafe>
      <InternalHeader label='Edit Address' />

      <S.EditAddressContainer>
        <DokiInput name="address_name" placeholder='Address Home' />
        <DokiInput name="contact_number" placeholder='Address Home' />
        <DokiInput name="area_nro" placeholder='Address Home' />
        <DokiInput name="popular_landmark" placeholder='Address Home' />
        <DokiInput name="city" placeholder='Address Home' />

        <DokiButton label="Save" />
      </S.EditAddressContainer>
    </S.EditAddressSafe>
  );
}