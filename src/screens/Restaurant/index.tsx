import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import LeftArrow from '@assets/icons/left-arrow/left-arrow.png';
import HeartIcon from '@assets/images/heart.svg';
import Unicorn from '@assets/images/random/unicorn.svg';


import * as S from './styles';
import { DokiButton } from '@components/DokiButton';
import { useCart } from 'src/hooks/cart.hook';
import api from 'src/service/api';
import { ItemCart } from '@components/ItemCart';

export function Restaurant() {
  const [itens, setItens] = useState([]);
  const { addCartItem } = useCart();

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
        <S.RestaurantHeader>
          <S.RestaurantBackButton>
            <S.RestaurantImage source={LeftArrow} />
          </S.RestaurantBackButton>

          <S.RestaurantHeaderTitle>Donuts</S.RestaurantHeaderTitle>

          <S.RestaurantBackButton>
            <HeartIcon width={RFValue(24.64)} height={RFValue(18.75)} />
          </S.RestaurantBackButton>
        </S.RestaurantHeader>

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
            <ItemCart key={iten.id} product={iten} />
          ))}

        </S.RestaurantBestsellers>
      </S.RestaurantContainer>
    </S.RestaurantSafe>
  );
}