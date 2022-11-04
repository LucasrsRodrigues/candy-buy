import React from 'react';
import { useCart } from 'src/hooks/cart.hook';

import * as S from './styles';

interface ItemCartProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  },
}

export function ItemCart({ product }: ItemCartProps) {
  const { addItemCart } = useCart();


  return (
    <S.ItemCart>
      <S.ItemCartImage source={{ uri: product.image }} />
      <S.ItemCartInfos>
        <S.ItemCartTitle>{product.name}</S.ItemCartTitle>
        <S.ItemCartPrice>R$ {product.price}</S.ItemCartPrice>
      </S.ItemCartInfos>

      <S.ItemCartButton onPress={() => addItemCart(product)}>
        <S.ItemCartButtonText>Add</S.ItemCartButtonText>
      </S.ItemCartButton>
    </S.ItemCart>
  );
}