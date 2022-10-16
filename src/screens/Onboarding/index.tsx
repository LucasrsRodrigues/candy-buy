import React, { useRef, useState } from 'react';
import { DokiButton } from '../../components/DokiButton';
import { useTheme } from 'styled-components';

import LogoSvg from '../../assets/images/logo.svg';

import * as S from './styles';
import { Animated, FlatList, Image, ImageSourcePropType, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import OnboardingSvg from '@assets/images/Onboarding-0.svg';

import AppIntroSlider from 'react-native-app-intro-slider';
import { RFValue } from 'react-native-responsive-fontsize';
import { RenderSlides } from '@components/RenderSlides';

const slides = [
  {
    key: '1',
    title: 'Book From Your Mobile',
    text: "Book from the comfort of your home, office\nor anywhere, on any device.",
    image: require('../../assets/images/cat/cell-cat/cell-cat.png')
  },
  {
    key: '2',
    title: 'Really Quick Devlivery',
    text: 'Our delivery agent, gets ready on his\nbike to quickly deliver the order.',
    image: require('../../assets/images/cat/cell-cat/cell-cat.png')
  },
  {
    key: '3',
    title: 'Enjoy Your Orders',
    text: 'Quick delivery, full customer chat\nand 24x7 restaurant support.',
    image: require('../../assets/images/cat/cell-cat/cell-cat.png')
  },
];

interface SlidesProps {
  item: {
    key: string;
    title: string;
    text: string;
    image: ImageSourcePropType;
  }
}


export function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();

  const slidesRef = useRef(null);

  const { width } = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // function RenderSlides({ item }: SlidesProps) {

  //   return (
  //     <S.RenderSlidesContainer>
  //       <Image
  //         source={item.image}
  //         style={[
  //           styles.image,
  //           {
  //             widh: 265,
  //             resizeMode: 'contain'
  //           }
  //         ]}
  //       />

  //       <View style={{ flex: 0.3 }}>
  //         <Text style={styles.title}>{item.title}</Text>
  //         <Text style={styles.description}>{item.text}</Text>
  //       </View>
  //     </S.RenderSlidesContainer>
  //   );
  // }

  return (
    <S.OnboardingSafe>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.orange_100} />
      <S.OnboardingContainer>
        <LogoSvg width={RFValue(160)} height={RFValue(32)} />

        <FlatList
          data={slides}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RenderSlides item={item} />}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.key}
          onScroll={
            Animated.event([
              {
                nativeEvent:
                {
                  contentOffset: { x: scrollX }
                }
              }
            ], {
              useNativeDriver: false,
            })
          }
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />

      </S.OnboardingContainer>
    </S.OnboardingSafe>
  );
}
