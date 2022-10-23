import { InternalHeader } from '@components/InternalHeader';
import React, { useEffect, useState } from 'react';
import api from 'src/service/api';
import { NoPreviousOrders } from './components/NoPreviousOrders';
import { OrdersContainer } from './components/OrdersContainer';

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
        {orders.length > 0 ? (<OrdersContainer orders={orders} />) : (<NoPreviousOrders />)}
      </S.MyOrdersContainer>
    </S.MyOrdersSafe>
  );
}