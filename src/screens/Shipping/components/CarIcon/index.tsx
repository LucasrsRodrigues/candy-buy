import React from 'react';
import { LatLng } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';
import * as S from './styles';

interface CarIconProps {
  fromLocation: LatLng;
}


export function CarIcon({ fromLocation }: CarIconProps) {
  return (
    <S.CarIconContainer
      coordinate={fromLocation}
      anchor={{ x: 0.5, y: 0.5 }}
      flat={true}
    >
      <FontAwesome5 name="car" size={24} color="black" />
    </S.CarIconContainer>
  );
}