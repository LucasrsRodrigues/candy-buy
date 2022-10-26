import React from 'react';
import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import * as S from './styles';

export function AddressesListCard() {
  const theme = useTheme();

  return (
    <S.AddressesListCard>
      <S.AddressesListInfos>
        <S.AddressesListInfosHeader>
          <S.AddressesName>Home</S.AddressesName>
          <Octicons
            name="dot-fill"
            size={15}
            color={theme.colors.typography_subtitle}
            style={{ marginHorizontal: 10 }}
          />
          <S.AddressesName>+91 12345 67890</S.AddressesName>
        </S.AddressesListInfosHeader>
        <S.AddressesListInf>
          435k Sitapur Road, Opposite Big V Mall,{'\n'}
          Khadra, Lucknow - 226020
        </S.AddressesListInf>

        <S.AddressesListCardButton>
          <S.AddressesListCardButtonText>Select this address</S.AddressesListCardButtonText>
        </S.AddressesListCardButton>
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