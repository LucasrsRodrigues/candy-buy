import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface DokiButtonProps extends TouchableOpacityProps {
  label: string;
}

export function DokiButton({ label, ...props }: DokiButtonProps) {
  return (
    <S.Button {...props}>
      <S.ButtonText>{label}</S.ButtonText>
    </S.Button>
  );
}