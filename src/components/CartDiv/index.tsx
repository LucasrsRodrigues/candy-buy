import React, { Fragment } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useCart } from 'src/hooks/cart.hook';
import { useNavigation } from '@react-navigation/native';

export function CartDiv() {
  const { quantity, show } = useCart();
  const { navigate } = useNavigation();

  if (show) {
    return (
      <S.CartDivContainer activeOpacity={0.8} onPress={() => navigate('Cart')}>
        <S.CartDivQuantity>{quantity}x Items</S.CartDivQuantity>

        <S.CartDivButton>
          <S.CartDivButtonText>View Bag</S.CartDivButtonText>
          <AntDesign name="right" size={RFValue(16)} color="#fff" />
        </S.CartDivButton>
      </S.CartDivContainer>
    );
  }

  return (
    <Fragment />
  )

}