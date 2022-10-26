import React from 'react';
import { Octicons, AntDesign, Entypo } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import * as S from './styles';

export function AddressesHeader() {
  const theme = useTheme();

  return (
    <S.AddressesHeaderSafe>
      <S.AddressesHeaderButton>
        <Octicons name="chevron-left" size={RFValue(20)} color={theme.colors.green_100} />
      </S.AddressesHeaderButton>

      <S.AddressesHeaderLabel>Addresses</S.AddressesHeaderLabel>

      <S.AddressesHeaderButtonPlus>
        <Entypo name="plus" size={RFValue(18)} color={theme.colors.orange_60} />
      </S.AddressesHeaderButtonPlus>
    </S.AddressesHeaderSafe>
  );
}