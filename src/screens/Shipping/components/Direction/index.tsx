import React from 'react';

import MapViewDirections, { MapViewDirectionsDestination, MapViewDirectionsOrigin } from 'react-native-maps-directions';

import * as S from './styles';

interface DirectionProps {
  origin: MapViewDirectionsOrigin;
  destination: MapViewDirectionsDestination;
}

export function Direction({ origin, destination }: DirectionProps) {
  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey=''
      strokeWidth={5}
      strokeColor='#fedd'
      optimizeWaypoints={true}
    />
  );
}