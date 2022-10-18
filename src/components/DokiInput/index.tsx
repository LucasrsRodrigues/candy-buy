import React, { useCallback, useState } from 'react';
import { TextInputProps, Image, Text, ImageSourcePropType } from 'react-native';

import * as S from './styles';

interface DokiInputProps extends TextInputProps {
  name: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
}

export function DokiInput({ name, leftIcon, rightIcon, ...props }: DokiInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const error = false;

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    console.log('handleInputFocus');
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    console.log('handleInputBlur');
  }, []);

  return (
    <S.DokInputContainer isFocused={isFocused} isErrored={!!error}>

      {leftIcon && (
        <S.DockInputImage source={leftIcon} />
      )}

      {/* Icone */}
      <S.DockTextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCapitalize='none'
        placeholderTextColor='#66615C'
        {...props}
      />

      {rightIcon && (
        <S.DockInputImage source={rightIcon} />
      )}
    </S.DokInputContainer>
  );
}