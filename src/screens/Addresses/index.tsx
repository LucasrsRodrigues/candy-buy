import React from 'react';
import { AddressesHeader } from './components/AddressesHeader';

import * as S from './styles';

export function Addresses() {
  return (
    <S.AddressesSafe>
      <AddressesHeader />
      <S.AddressesContainer>
        <S.AddressesSelected>
          <S.AddressesSelectedName>Gomtinagar Office</S.AddressesSelectedName>
          <S.AddressesSelectedNumber>Home +91 70076 12356</S.AddressesSelectedNumber>

        </S.AddressesSelected>
      </S.AddressesContainer>
    </S.AddressesSafe>
  );
}