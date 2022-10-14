import React from 'react';

import * as S from './styles';

interface DokiButtonProps {
  label: string;
}

export function DokiButton({ label }: DokiButtonProps) {
  return (
    <S.Button>
      <S.ButtonText>{label}</S.ButtonText>
    </S.Button>
  );
}