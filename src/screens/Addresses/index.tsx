import React, { useEffect, useState } from 'react';
import { AddressesHeader } from './components/AddressesHeader';
import { useTheme } from 'styled-components/native';
import { AddressesListCard } from './components/AddressesListCard';

import api from 'src/service/api';

import * as S from './styles';

interface addressesProps {
  id: string;
  name: string;
  phone: string;
  info: string;
  isDefault: boolean;
}

export function Addresses() {
  const [addresses, setAddresses] = useState<addressesProps[]>([]);
  const [addressesDefault, setAddressesDefault] = useState({} as addressesProps);

  const theme = useTheme();

  async function getAddresses() {
    const response = await api.get('addresses');

    let add = response.data;

    let addressDefault = add.find(element => element.isDefault === true);

    setAddressesDefault(addressDefault);

    setAddresses(add);
  }

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <S.AddressesSafe>
      <AddressesHeader />
      <S.AddressesContainer>
        <S.AddressesSelected>
          <S.AddressesSelectedName>{addressesDefault.name}</S.AddressesSelectedName>
          <S.AddressesSelectedNumber>{addressesDefault.name} {addressesDefault.phone}</S.AddressesSelectedNumber>
          <S.AddressesSelectedInf>
            {addressesDefault.info}
          </S.AddressesSelectedInf>
        </S.AddressesSelected>

        <S.AddressesTitle>All Address</S.AddressesTitle>

        {addresses.map(address => <AddressesListCard key={address.id} address={address} />)}
      </S.AddressesContainer>
    </S.AddressesSafe>
  );
}