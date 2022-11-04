import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';
import { useCart } from 'src/hooks/cart.hook';

export function CartDiv() {
  const { navigate } = useNavigation();
  const { getQuantityItens, showCart } = useCart();

  if (getQuantityItens() === 0 || !showCart) {
    return null;
  }

  return (
    <S.CartDivContainer activeOpacity={0.8} onPress={() => navigate('Cart')}>
      <S.CartDivQuantityContainer>
        <S.CartDivQuantity>{getQuantityItens()}</S.CartDivQuantity>
      </S.CartDivQuantityContainer>

      <S.CartDivButton>
        <Feather name="shopping-cart" size={24} color="#fff" />
      </S.CartDivButton>
    </S.CartDivContainer>
  )
}