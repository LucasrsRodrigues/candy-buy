import React from 'react';
import { DokiInput } from '@components/DokiInput';
import searchIcon from '@assets/icons/search/search.png';

import UserIcon from '@assets/images/user-icon.svg';

import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import HeartSvg from '@assets/images/heart.svg';
import { useNavigation } from '@react-navigation/native';

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

export function Home() {
  const { navigate } = useNavigation();

  return (
    <S.HomeSafe>
      <S.HomeContainer>
        <S.HomeHeader>
          <DokiInput leftIcon={searchIcon} name="search" placeholder='Search Doki Doki' />

          <UserIcon width={RFValue(64)} height={RFValue(64)} style={{ marginLeft: RFValue(8) }} />
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

          <S.HomeRestaurantCard onPress={() => navigate('Restaurant')} activeOpacity={0.8}>
            <S.HomeRestaurantCardImage source={require('@assets/images/restaurants/donuts-shop/Donut.png')} />

            <S.HomeRestaurantCardInfos>
              <S.RestaurantCardTime>15-25 mins</S.RestaurantCardTime>
              <S.RestaurantCardName>Donuts Shop</S.RestaurantCardName>
              <S.RestaurantCardText>Classis, broken hear and more tasty donuts</S.RestaurantCardText>
            </S.HomeRestaurantCardInfos>

            <S.HomeRestaurantCardHeartButton>
              <HeartSvg width={RFValue(25)} height={RFValue(19)} />
            </S.HomeRestaurantCardHeartButton>
          </S.HomeRestaurantCard>
        </S.HomeSection>
      </S.HomeContainer>
    </S.HomeSafe>
  );
}