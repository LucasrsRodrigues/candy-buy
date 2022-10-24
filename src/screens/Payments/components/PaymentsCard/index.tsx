import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

interface PaymentsCardProps {
  active?: boolean;
  payment: {
    id: string;
    cardNumber: string;
    cardName: string;
    cardDate: string;
  }
}


export function PaymentsCard({ active, payment }: PaymentsCardProps) {
  const theme = useTheme();

  return (
    <S.PaymentsCard active={active}>
      <S.PaymentsCheck>
        <S.PaymentsCircle active={active}>
          <S.PaymentsDot active={active} />
        </S.PaymentsCircle>
      </S.PaymentsCheck>

      <S.PaymentsInfos>
        <S.PaymentsCardNumber active={active}>{payment.cardNumber}</S.PaymentsCardNumber>

        <S.PaymentsWrapper>
          <S.PaymentsInfosName active={active}>{payment.cardName}</S.PaymentsInfosName>
          <S.PaymentsInfosDate active={active}>{payment.cardDate}</S.PaymentsInfosDate>
        </S.PaymentsWrapper>

      </S.PaymentsInfos>

      <S.PaymentsEdit>
        <MaterialCommunityIcons
          name="pencil"
          size={24}
          color={active ? theme.colors.orange_80 : theme.colors.orange_60}
        />
      </S.PaymentsEdit>
    </S.PaymentsCard>
  );
}