import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import LeftArrow from '@assets/icons/left-arrow/left-arrow.png';
import HeartIcon from '@assets/images/heart.svg';
import Unicorn from '@assets/images/random/unicorn.svg';


import * as S from './styles';
import { DokiButton } from '@components/DokiButton';

export function Restaurant() {
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

          <S.ItemCard>
            <S.ItemCardImage />

            <S.ItemCardInfos>
              <S.ItemCardTitle>Classic Donut</S.ItemCardTitle>
              <S.ItemCardPrice>R$ 3.99 x1</S.ItemCardPrice>
            </S.ItemCardInfos>

            <S.ItemCardButton>
              <S.ItemCardButtonText>Add</S.ItemCardButtonText>
            </S.ItemCardButton>
          </S.ItemCard>
        </S.RestaurantBestsellers>
      </S.RestaurantContainer>
    </S.RestaurantSafe>
  );
}