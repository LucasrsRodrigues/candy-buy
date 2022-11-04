import React, { useEffect, useState } from 'react';

import Unicorn from '@assets/images/random/unicorn.svg';
import { InternalHeader } from '@components/InternalHeader';
import { ItemCart } from '@components/ItemCart';

import api from 'src/service/api';
import * as S from './styles';

export function Restaurant() {
  const [itens, setItens] = useState([]);

  async function getItens() {
    const response = await api.get('/itens');

    setItens(response.data);
  }

  useEffect(() => {
    getItens();
  }, []);

  return (
    <S.RestaurantSafe>
      <S.RestaurantContainer>
        <InternalHeader label="Donuts" showHeart={true} />

        <S.RestaurantCard>
          <S.RestaurantWrapper>
            <S.RestaurantCardTitle>Unicorn Donuts</S.RestaurantCardTitle>
            <S.RestaurantCardText>
              The world famous unicorn
              donuts at your place
            </S.RestaurantCardText>
          </S.RestaurantWrapper>
          <Unicorn />
        </S.RestaurantCard>

        <S.RestaurantBestsellers>
          <S.RestaurantBestsellersTitle>Bestsellers</S.RestaurantBestsellersTitle>

          {itens.map(iten => (
            <ItemCart
              key={String(iten.id)}
              product={iten}
            />
          ))}
        </S.RestaurantBestsellers>
      </S.RestaurantContainer>
    </S.RestaurantSafe>
  );
}