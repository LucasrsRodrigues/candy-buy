import React from 'react';
import SadUnicorn from '@assets/images/sad_unicorn.svg';

import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { DokiButton } from '@components/DokiButton';

export function NoSavedCards() {
  return (
    <S.NoSavedCardsContainer>
      <S.NoSavedCardsContent>
        <SadUnicorn width={RFValue(244)} height={RFValue(285)} />

        <S.NoSavedCardsTitle>No Saved Cards</S.NoSavedCardsTitle>
        <S.NoSavedCardsText>
          You don’t saved any credit/debit cards. Add
          a card now to enable automatic payments.
        </S.NoSavedCardsText>
      </S.NoSavedCardsContent>
    </S.NoSavedCardsContainer>
  );
}