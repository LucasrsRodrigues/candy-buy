import React, { useEffect, useState } from 'react';
import { InternalHeader } from '@components/InternalHeader';
import { PaymentsCard } from './components/PaymentsCard';

import * as S from './styles';
import api from 'src/service/api';
import { DokiButton } from '@components/DokiButton';
import { ListPaymentsCard } from './components/ListPaymentsCard';
import { NoSavedCards } from './components/NoSavedCards';
import { useNavigation } from '@react-navigation/native';

interface PaymentsProps {
  id: string;
  cardNumber: string;
  cardName: string;
  cardDate: string;
  isDefault: boolean;
}

export function Payments() {
  const { navigate } = useNavigation();
  const [payments, setPayments] = useState<PaymentsProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/payments');
      setPayments(response.data);
    })();
  }, []);



  return (
    <S.PaymentsSafe>
      <InternalHeader label="Payments" />
      <S.PaymentsContent>

        <S.PaymentsContainer>
          {payments.length > 0 ? (<ListPaymentsCard payments={payments} />) : (<NoSavedCards />)}
        </S.PaymentsContainer>

        <DokiButton label='Add New Card' onPress={() => navigate('AddNewCard')} />
      </S.PaymentsContent>
    </S.PaymentsSafe>
  );
}