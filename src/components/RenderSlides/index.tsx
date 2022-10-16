import React from 'react';

import * as S from './styles';

export function RenderSlides({ item }) {
  return (
    <S.RenderSlidesContainer>
      <S.RenderSlidesImage
        source={item.image}
      />

      <S.RenderSlidesWrapper>
        <S.RenderSlidesTitle>{item.title}</S.RenderSlidesTitle>
        <S.RenderSlidesText>{item.text}</S.RenderSlidesText>
      </S.RenderSlidesWrapper>
    </S.RenderSlidesContainer>
  );
}