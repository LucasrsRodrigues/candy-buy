import React from 'react';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';

import SplashScreenSvg from '../../assets/images/SplashScreen.svg';

import * as S from './styles';

export default function SplashScreen() {

  return (
    <S.ContainerSplash>
      <Animated.View>
        <SplashScreenSvg width={RFValue(320)} height={RFValue(320)} />
      </Animated.View>
    </S.ContainerSplash>
  );
}