import { DokiButton } from '@components/DokiButton';
import { InternalHeader } from '@components/InternalHeader';
import { ItemCart } from '@components/ItemCart';
import React, { useEffect } from 'react';
import { useCart } from 'src/hooks/cart.hook';

import * as S from './styles';

export function Cart() {
  const { itens, setShow } = useCart();

  useEffect(() => {
    setShow(false);
  }, []);


  return (
    <S.CartSafe>
      <InternalHeader label="You Bags" />

      <S.CartContainer>
        {/* {itens.map(iten => <ItemCart key={String(iten.id)} product={iten} />)} */}
      </S.CartContainer>

      <S.CartInfo>
        <S.CartInfoRow>
          <S.CartSubtext>Subtotal</S.CartSubtext>
          <S.CartValue>143.39</S.CartValue>
        </S.CartInfoRow>
        <S.CartInfoRow>
          <S.CartSubtext>Shipping Fees</S.CartSubtext>
          <S.CartValue>7.99</S.CartValue>
        </S.CartInfoRow>
        <S.CartInfoRow>
          <S.CartSubtextStrong>Total</S.CartSubtextStrong>
          <S.CartValueStrong>151.98</S.CartValueStrong>
        </S.CartInfoRow>

        <DokiButton label="Secure Checkout" />
      </S.CartInfo>
    </S.CartSafe>
  );
}