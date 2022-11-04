import React from 'react';
import { LatLng } from 'react-native-maps';

import * as S from './styles';

interface DestinationMarkerProps {
  toLocation: LatLng;
}

export function DestinationMarker({ toLocation }: DestinationMarkerProps) {
  return (
    <S.DestinationMarkerContainer coordinate={toLocation}>
      <S.DestinationMarkerDot>
        <S.DestinationMarkerSla>

        </S.DestinationMarkerSla>
      </S.DestinationMarkerDot>
    </S.DestinationMarkerContainer>
  );
}