import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface DokiButtonProps extends TouchableOpacityProps {
  label?: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: 'outline' | 'bold';
}

export function DokiButton({ label = '', type = 'bold', leftIcon = '', rightIcon = '', ...props }: DokiButtonProps) {
  const theme = useTheme();

  return (
    <S.Button type={type} {...props}>
      {leftIcon && <Octicons name={leftIcon} size={24} color={theme.colors.white} />}
      {label && <S.ButtonText>{label}</S.ButtonText>}
      {rightIcon && <Octicons name={rightIcon} size={24} color={theme.colors.white} />}
    </S.Button>
  );
}