import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as S from './styles';
import { useCart } from 'src/hooks/cart.hook';

interface CartToastProps {
  iten: {
    product: {
      id: string;
      name: string;
      image: string;
      price: number;
      quantity: number;
    },
    quantity: number;
  }
}

export function CartToast({ iten }: CartToastProps) {
  const { quantityHandler } = useCart();

  return (
    <S.CartToastContainer>
      <S.CartToastImage source={{ uri: iten.product.image }} />
      <S.CartToastInfos>
        <S.CartToastTitle>{iten.product.name}</S.CartToastTitle>
        <S.CartToastPrice>R$ {iten.product.price}</S.CartToastPrice>
      </S.CartToastInfos>

      <S.CartRight>
        <S.CartToastButton>
          <S.CartToastButtonAction onPress={() => quantityHandler("less", iten.product.id)}>
            <AntDesign name="minus" size={24} color="white" />
          </S.CartToastButtonAction>
          <S.CartToastButtonText>{iten.quantity}</S.CartToastButtonText>
          <S.CartToastButtonAction onPress={() => quantityHandler("more", iten.product.id)}>
            <AntDesign name="plus" size={24} color="white" />
          </S.CartToastButtonAction>
        </S.CartToastButton>

        <S.CartValue>
          R$ {iten.product.price * iten.quantity}
        </S.CartValue>
      </S.CartRight>


    </S.CartToastContainer>
  );
}