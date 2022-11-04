import React, { Fragment, useEffect, useState } from 'react';
import { DokiInput } from '@components/DokiInput';

import SearchIcon from '@assets/icons/search.svg';

import UserIcon from '@assets/images/user-icon.svg';

import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { useCart } from 'src/hooks/cart.hook';
import api from 'src/service/api';
import { HomeRestaurantCard } from './components/HomeRestaurantCard';
import { SEHomeRestaurantCard } from './components/SEHomeRestaurantCard';
import { ShimmerRestaurantCard } from './components/ShimmerRestaurantCard';
import { RestaurantsList } from './components/RestaurantsList';

const candies = [
  {
    id: '0',
    title: 'chocolates',
    image: require('@assets/images/candies/chocolate/Chocolate.png')
  },
  {
    id: '1',
    image: require('@assets/images/candies/christmas-special/ChristmasSpecial.png')
  },
  {
    id: '2',
    image: require('@assets/images/candies/cotton-candy/CottonCandy.png')
  },
  {
    id: '3',
    image: require('@assets/images/candies/icre-cream/IceCream.png')
  },
  {
    id: '4',
    image: require('@assets/images/candies/jelly-cake/JellyCake.png')
  },
  {
    id: '5',
    image: require('@assets/images/candies/shake/Shake.png')
  },
];

interface RestaurantsProps {
  id: string;
  time: string;
  name: string;
  description: string;
  image: string;
  isFavorite: boolean;
}

export function Home() {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  const { navigate } = useNavigation();

  async function getRestaurants() {
    const response = await api.get('/restaurants');
    setRestaurants(response.data);
    setLoading(false);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <S.HomeSafe>
      <S.HomeContainer showsVerticalScrollIndicator={false}>
        <S.HomeHeader>
          <DokiInput leftIcon={SearchIcon} name="search" placeholder='Search Doki Doki' flex />

          <S.HomeHeaderButton activeOpacity={0.8} onPress={() => navigate('Profile')}>
            <UserIcon width={RFValue(64)} height={RFValue(64)} style={{ marginLeft: RFValue(8) }} />
          </S.HomeHeaderButton>
        </S.HomeHeader>

        <S.HomeSection>
          <S.HomeHero>
            Hello Shambhavi,
          </S.HomeHero>
          <S.HomeLorem>
            What would you like to eat today
          </S.HomeLorem>

          <S.HomeCandiesCarrousel automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false} horizontal>
            {candies.map(candy => (
              <S.HomeCandyCard key={candy.id}>
                <S.HomeCandyImage source={candy.image} />
              </S.HomeCandyCard>
            ))}
          </S.HomeCandiesCarrousel>
        </S.HomeSection>

        <S.HomeSection>
          <S.HomeHero>Nearby Restaurants</S.HomeHero>

          {loading ? (
            <ShimmerRestaurantCard />
          ) : <RestaurantsList restaurants={restaurants} />}

        </S.HomeSection>
      </S.HomeContainer>
    </S.HomeSafe>
  );
}