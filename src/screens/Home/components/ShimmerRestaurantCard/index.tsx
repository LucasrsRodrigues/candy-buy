import React from 'react';
import { SEHomeRestaurantCard } from '../SEHomeRestaurantCard';

import * as S from './styles';

export function ShimmerRestaurantCard() {
  return (
    <S.ShimmerRestaurantCardContainer>
      <S.ShimmerRestaurantCardWrapper>
        <SEHomeRestaurantCard />
      </S.ShimmerRestaurantCardWrapper>

      <S.ShimmerRestaurantCardWrapper>
        <SEHomeRestaurantCard />
      </S.ShimmerRestaurantCardWrapper>
    </S.ShimmerRestaurantCardContainer>
  );
}