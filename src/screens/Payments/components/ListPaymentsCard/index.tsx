import React from 'react';
import { PaymentsCard } from '../PaymentsCard';

import * as S from './styles';

interface ListPaymentsCardProps {
  payments: Array<{
    id: string;
    cardNumber: string;
    cardName: string;
    cardDate: string;
    isDefault: boolean;
  }>;
}

export function ListPaymentsCard({ payments }: ListPaymentsCardProps) {
  return (
    <S.ListPaymentsCardContainer>
      {payments.map(payment => <PaymentsCard key={payment.id} payment={payment} active={payment.isDefault} />)}
    </S.ListPaymentsCardContainer>
  );
}