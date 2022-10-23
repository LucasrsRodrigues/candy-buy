import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import * as S from './styles';

interface OrdersContainerProps {
  orders: any;
}

export function OrdersContainer({ orders }: OrdersContainerProps) {
  return (
    <S.OrdersContainer>
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
    </S.OrdersContainer>
  );
}