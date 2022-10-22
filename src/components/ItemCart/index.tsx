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
  image: string;
}

export function ItemCart({ product, image }: ItemCartProps) {
  const { addCartItem } = useCart();
  // const sourceImage = require(`../../../assets/foods/${image}`);

  return (
    <S.ItemCart>
      {/* <S.ItemCartImage source={sourceImage} /> */}

      <S.ItemCartInfos>
        <S.ItemCartTitle>{product.name}</S.ItemCartTitle>
        <S.ItemCartPrice>R$ {product.price} x{product.quantity}</S.ItemCartPrice>
      </S.ItemCartInfos>

      <S.ItemCartButton onPress={() => addCartItem(product)}>
        <S.ItemCartButtonText>Add</S.ItemCartButtonText>
      </S.ItemCartButton>
    </S.ItemCart>
  );
}