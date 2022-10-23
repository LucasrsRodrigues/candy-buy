import { InternalHeader } from '@components/InternalHeader';
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import api from 'src/service/api';

import * as S from './styles';

type Itens = {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrdersProps {
  id: string;
  status: string;
  itens: Array<Itens>;
  total: string;
  hora: string;
}

export function MyOrders() {
  const [orders, setOrders] = useState<OrdersProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/orders');
      setOrders(response.data);
    })();
  }, []);

  return (
    <S.MyOrdersSafe>
      <InternalHeader label="My Orders" />

      <S.MyOrdersContainer>
        {orders.map(item => (
          <S.MyOrdersCard key={item.id}>
            <S.MyOrdersCardHeader>
              <S.MyOrdersCardHeaderStatus>
                <S.MyOrdersCardHeaderBox>
                  <FontAwesome5 name="check-square" size={24} color="black" />
                  <S.MyOrdersCardHeaderBoxText>
                    {item.status}
                  </S.MyOrdersCardHeaderBoxText>
                </S.MyOrdersCardHeaderBox>
              </S.MyOrdersCardHeaderStatus>
              <S.MyOrdersCardHeaderTime>{item.hora}</S.MyOrdersCardHeaderTime>
            </S.MyOrdersCardHeader>

            <S.MyOrdersCardBody>
              {item.itens.map(iten => (
                <S.MyOrdersCardIten key={iten.id}>
                  <S.MyOrdersCardItenName>{iten.name}</S.MyOrdersCardItenName>

                  <S.MyOrdersCardItenAmount>
                    <S.MyOrdersCardItenAmountValue>R$ {iten.price}</S.MyOrdersCardItenAmountValue>
                    <S.MyOrdersCardItenAmountQuantity>{iten.quantity} x {iten.price * iten.quantity}</S.MyOrdersCardItenAmountQuantity>
                  </S.MyOrdersCardItenAmount>
                </S.MyOrdersCardIten>
              ))}
            </S.MyOrdersCardBody>

            <S.MyOrdersFooter>
              <S.MyOrdersFooterLabel>Total</S.MyOrdersFooterLabel>
              <S.MyOrdersFooterValue>R$ {item.total}</S.MyOrdersFooterValue>
            </S.MyOrdersFooter>
          </S.MyOrdersCard>
        ))}
      </S.MyOrdersContainer>
    </S.MyOrdersSafe>
  );
}