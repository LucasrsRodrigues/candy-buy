import React from 'react';
import { AddressesHeader } from './components/AddressesHeader';
import { useTheme } from 'styled-components/native';
import { AddressesListCard } from './components/AddressesListCard';
import * as S from './styles';

export function Addresses() {
  const theme = useTheme();

  return (
    <S.AddressesSafe>
      <AddressesHeader />
      <S.AddressesContainer>
        <S.AddressesSelected>
          <S.AddressesSelectedName>Gomtinagar Office</S.AddressesSelectedName>
          <S.AddressesSelectedNumber>Home +91 70076 12356</S.AddressesSelectedNumber>
        </S.AddressesSelected>

        <S.AddressesTitle>All Address</S.AddressesTitle>

        <AddressesListCard />
        <AddressesListCard />
        <AddressesListCard />

      </S.AddressesContainer>
    </S.AddressesSafe>
  );
}