import React, { useCallback, useState } from 'react';
import { TextInputProps, Image, Text, ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';

import * as S from './styles';

interface DokiInputProps extends TextInputProps {
  name: string;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
  flex?: boolean;
}

export function DokiInput({ name, leftIcon: LeftIcon, rightIcon: RightIcon, flex = false, ...props }: DokiInputProps) {
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
    <S.DokInputContainer isFocused={isFocused} isErrored={!!error} flex={flex}>

      {LeftIcon && (
        <LeftIcon style={{ marginLeft: 16 }} />
      )}

      {/* Icone */}
      <S.DockTextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCapitalize='none'
        placeholderTextColor='#66615C'
        {...props}
      />

      {RightIcon && (
        <RightIcon />
      )}
    </S.DokInputContainer>
  );
}