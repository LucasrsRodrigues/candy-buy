import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { LatLng, PROVIDER_GOOGLE } from 'react-native-maps';
import { CarIcon } from './components/CarIcon';
import { DestinationMarker } from './components/DestinationMarker';
import { Direction } from './components/Direction';

import * as S from './styles';

export function Shipping() {
  const [region, setRegion] = useState();
  const [fromLocation, setFromLocation] = useState({} as LatLng);
  const [toLocation, setToLocation] = useState({} as LatLng);

  useEffect(() => {

    let fromtLoc = {
      latitude: -23.5918106,
      longitude: -46.2953356
    };

    let toLoc = {
      latitude: -23.541110,
      longitude: -46.320840
    };


    let mapRegion = {
      latitude: (fromtLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromtLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromtLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromtLoc.longitude - toLoc.longitude) * 2
    }


    setFromLocation(fromtLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
  }, []);

  return (
    <S.Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={styles.map}
      >
        <Direction origin={toLocation} destination={fromLocation} />
        <DestinationMarker toLocation={toLocation} />
        <CarIcon fromLocation={fromLocation} />
      </MapView>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});