import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from 'styled-components/native';
import * as S from './styles';
import api from 'src/service/api';


interface HomeRestaurantCardProps {
  restaurant: {
    id: string;
    time: string;
    name: string;
    description: string;
    image: string;
    isFavorite: boolean;
  }
}

export function HomeRestaurantCard({ restaurant }: HomeRestaurantCardProps) {
  const [data, setData] = useState(restaurant);

  const { navigate } = useNavigation();
  const theme = useTheme();

  async function handleFavorite() {
    Object.assign(restaurant, {
      isFavorite: !restaurant.isFavorite
    });

    const response = await api.put(`/restaurants/${restaurant.id}`, restaurant);
    setData(response.data);
  }

  return (
    <S.HomeRestaurantCard key={data.id} onPress={() => navigate('Restaurant')} activeOpacity={0.8}>
      <S.HomeRestaurantCardImage source={{ uri: data.image }} />

      <S.HomeRestaurantCardInfos>
        <S.RestaurantCardTime>{data.time} mins</S.RestaurantCardTime>
        <S.RestaurantCardName>{data.name}</S.RestaurantCardName>
        <S.RestaurantCardText>{data.description}</S.RestaurantCardText>
      </S.HomeRestaurantCardInfos>

      <S.HomeRestaurantCardHeartButton onPress={handleFavorite} activeOpacity={0.8}>
        <Ionicons name={data.isFavorite ? 'ios-heart-sharp' : 'ios-heart-outline'} size={RFValue(24)} color={theme.colors.orange_40} />
      </S.HomeRestaurantCardHeartButton>
    </S.HomeRestaurantCard>
  );
}