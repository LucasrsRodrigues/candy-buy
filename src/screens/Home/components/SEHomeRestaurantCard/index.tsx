import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native';

import * as S from './styles';

const { width } = Dimensions.get('window');

export function SEHomeRestaurantCard() {

  const AnimatedView = Animated.createAnimatedComponent(LinearGradient);

  const animatedValue = new Animated.Value(0);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width]
  })

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }, []);

  return (
    <S.SEHomeRestaurantCardContainer>
      <AnimatedView
        colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          StyleSheet.absoluteFillObject,
          {
            transform: [{ translateX }]
          }
        ]}
      />
    </S.SEHomeRestaurantCardContainer>
  );
}