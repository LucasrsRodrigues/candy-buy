import React, { useState } from 'react';
import { DokiButton } from '../../components/DokiButton';
import { useTheme } from 'styled-components';

import LogoSvg from '../../assets/images/logo.svg';

import * as S from './styles';
import { FlatList, Image, StatusBar } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import { RFValue } from 'react-native-responsive-fontsize';

const slides = [
  {
    key: '1',
    image: require('../../assets/images/Onboarding-0.svg'),
    title: 'Book From Your Mobile',
    text: 'Book from the comfort of your home, office or anywhere, on any device.'
  },
  {
    key: '2',
    image: require('../../assets/images/Onboarding-1.svg'),
    title: 'Really Quick Devlivery',
    text: 'Our delivery agent, gets ready on his bike to quickly deliver the order.'
  },
  {
    key: '3',
    image: require('../../assets/images/Onboarding-2.svg'),
    title: 'Enjoy Your Orders',
    text: 'Quick delivery, full customer chat and 24x7 restaurant support.'
  },
];

interface SlidesProps {
  item: {
    key: string;
    image: string;
    title: string;
    text: string;
  }
}


export default function Onboarding() {
  const [showHome, setShowHome] = useState(false);
  const theme = useTheme();

  function RenderSlides({ item }: SlidesProps) {

    return (
      <S.RenderSlidesContainer>
        <Image
          source={require('../../assets/images/Onboarding-2.png')}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%'
          }}
        />
        {/* <S.RenderSlidesTitle>
          {item.title}
        </S.RenderSlidesTitle>

        <S.RenderSlidesText>
          {item.text}
        </S.RenderSlidesText> */}
      </S.RenderSlidesContainer>
    );
  }

  if (showHome) {
    return;
  }

  return (
    <S.OnboardingSafe>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.orange_100} />
      <S.OnboardingContainer>
        <LogoSvg />
        {/* <S.RenderSlidesTitle>Book From Your Mobile</S.RenderSlidesTitle> */}
        <FlatList
          data={slides}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RenderSlides item={item} />}
        />

        <DokiButton />
      </S.OnboardingContainer>
    </S.OnboardingSafe>
  );
}