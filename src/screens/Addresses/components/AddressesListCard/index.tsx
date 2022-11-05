import React from 'react';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';
import api from 'src/service/api';


interface AddressesListCardProps {
  address: {
    id: string;
    name: string;
    phone: string;
    info: string;
    isDefault: boolean;
  }
}

export function AddressesListCard({ address }: AddressesListCardProps) {
  const theme = useTheme();


  async function setDefault() {
    Object.assign(address, {
      isDefault: true
    });

    const response = await api.put(`/addresses/${address.id}`, address);

    console.log(response.data);
  }

  return (
    <S.AddressesListCard>
      <S.AddressesListInfos>
        <S.AddressesListInfosHeader>
          <S.AddressesName>{address.name}</S.AddressesName>
          <Octicons
            name="dot-fill"
            size={15}
            color={theme.colors.typography_subtitle}
            style={{ marginHorizontal: 10 }}
          />
          <S.AddressesName>{address.phone}</S.AddressesName>
        </S.AddressesListInfosHeader>

        <S.AddressesListInf>
          {address.info}
        </S.AddressesListInf>

        {address.isDefault ? (
          <S.AddressesListCardButton onPress={setDefault}>
            <S.AddressesListCardButtonText>Select this address</S.AddressesListCardButtonText>
          </S.AddressesListCardButton>
        ) : null}

      </S.AddressesListInfos>
      <S.AddressesEditButton>
        <MaterialCommunityIcons
          name="pencil"
          size={RFValue(24)}
          color={theme.colors.orange_60}
        />
      </S.AddressesEditButton>
    </S.AddressesListCard>
  );
}