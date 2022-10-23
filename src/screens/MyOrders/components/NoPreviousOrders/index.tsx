import React from 'react';
import AvocadoSvg from '@assets/images/avocado.svg';

import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { DokiButton } from '@components/DokiButton';

export function NoPreviousOrders() {
  return (
    <S.NoPreviousOrdersContainer>
      <S.NoPreviousOrdersContent>
        <AvocadoSvg width={RFValue(244)} height={RFValue(285)} />

        <S.NoPreviousOrdersTitle>No Previous Orders</S.NoPreviousOrdersTitle>
        <S.NoPreviousOrdersText>
          Your previous orders will appear here.
          Plus you{'\n'}will get 60% off on your first order.
        </S.NoPreviousOrdersText>
      </S.NoPreviousOrdersContent>

      <DokiButton label="Order Now" style={{ marginTop: 'auto' }} />

    </S.NoPreviousOrdersContainer>
  );
}