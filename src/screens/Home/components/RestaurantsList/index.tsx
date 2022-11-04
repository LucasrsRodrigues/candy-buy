import React from 'react';
import { HomeRestaurantCard } from '../HomeRestaurantCard';

import * as S from './styles';

interface RestaurantsListProps {
  restaurants: Array<{
    id: string;
    time: string;
    name: string;
    description: string;
    image: string;
    isFavorite: boolean;
  }>;
}

export function RestaurantsList({ restaurants }: RestaurantsListProps) {
  return (
    <S.RestaurantsListContainer>
      {restaurants.map(restaurant => (
        <S.HomeWrapperCard key={restaurant.id}>
          <HomeRestaurantCard restaurant={restaurant} />
        </S.HomeWrapperCard>
      ))}
    </S.RestaurantsListContainer>
  );
}