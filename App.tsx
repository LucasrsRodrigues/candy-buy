import React from 'react';
import theme from './src/global/styles/theme';

import { ThemeProvider } from 'styled-components';

import {
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import {
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  Baloo2_700Bold
} from '@expo-google-fonts/baloo-2';

import { useFonts } from 'expo-font';

import SplashScreen from './src/screens/SplashScreen';
import Routes from 'src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Fredoka-Bold': require('./src/assets/fonts/Fredoka-Bold.ttf'),
    'Fredoka-Light': require('./src/assets/fonts/Fredoka-Light.ttf'),
    'Fredoka-Medium': require('./src/assets/fonts/Fredoka-Medium.ttf'),
    'Fredoka-Regular': require('./src/assets/fonts/Fredoka-Regular.ttf'),
    'Fredoka-SemiBold': require('./src/assets/fonts/Fredoka-SemiBold.ttf'),
    'FredokaOne-Regular': require('./src/assets/fonts/FredokaOne-Regular.ttf'),
    Nunito_400Regular,
    Nunito_700Bold,
    Baloo2_500Medium,
    Baloo2_400Regular,
    Baloo2_600SemiBold,
    Baloo2_700Bold
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

