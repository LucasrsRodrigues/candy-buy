import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

// import LeftArrow from '@assets/icons/left-arrow/left-arrow.png';
import HeartIcon from '@assets/images/heart.svg';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface InternalHeaderProps {
  label: string;
  showHeart?: boolean;
}

export function InternalHeader({ label, showHeart = false }: InternalHeaderProps) {
  const { goBack } = useNavigation();
  const theme = useTheme();

  return (
    <S.InternalHeaderContainer>
      <S.InternalHeaderBackButton onPress={goBack}>
        <Octicons name="chevron-left" size={RFValue(20)} color={theme.colors.green_100} />
      </S.InternalHeaderBackButton>

      <S.InternalHeaderTitle>{label}</S.InternalHeaderTitle>

      {showHeart && (
        <S.InternalHeaderBackButton>
          <Octicons name="heart" size={24} color={theme.colors.orange_60} />
        </S.InternalHeaderBackButton>
      )}

    </S.InternalHeaderContainer>
  );
}