import { InternalHeader } from '@components/InternalHeader';
import React from 'react';
import EditSvg from '@assets/icons/Pencil.svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function Payments() {
  return (
    <S.PaymentsSafe>
      <InternalHeader label="Payments" />

      <S.PaymentsContainer>

        <S.PaymentsCard>
          <S.PaymentsCheck>
            <S.PaymentsCircle>
              <S.PaymentsDot />
            </S.PaymentsCircle>
          </S.PaymentsCheck>

          <S.PaymentsInfos>
            <S.PaymentsCardNumber>9683 2423 5987 3452</S.PaymentsCardNumber>

            <S.PaymentsWrapper>
              <S.PaymentsInfosName>Salman Khan</S.PaymentsInfosName>
              <S.PaymentsInfosDate>02/2024</S.PaymentsInfosDate>
            </S.PaymentsWrapper>

          </S.PaymentsInfos>

          <S.PaymentsEdit>
            <MaterialCommunityIcons name="pencil" size={24} color="black" />
          </S.PaymentsEdit>
        </S.PaymentsCard>

      </S.PaymentsContainer>
    </S.PaymentsSafe>
  );
}