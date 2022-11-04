import React from 'react';
import { DokiButton } from '@components/DokiButton';
import { InternalHeader } from '@components/InternalHeader';
import { useCart } from 'src/hooks/cart.hook';
import { CartToast } from './components/CartToast';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function Cart() {
  const { cartItems, getSubtotalPrice, getTotal, getShipping } = useCart();
  const { navigate } = useNavigation();

  function confirmCheckout() {
    navigate('Shipping');
  }

  return (
    <S.CartSafe>
      <S.CartWrapper>
        <InternalHeader label="You Bags" />
      </S.CartWrapper>

      <S.CartContainer>
        {cartItems.map(iten => <CartToast key={String(iten.product.id)} iten={iten} />)}
      </S.CartContainer>

      <S.CartInfo>
        <S.CartInfoRow>
          <S.CartSubtext>Subtotal</S.CartSubtext>
          <S.CartValue>R$ {getSubtotalPrice()}</S.CartValue>
        </S.CartInfoRow>

        <S.CartInfoSpace />

        <S.CartInfoRow>
          <S.CartSubtext>Shipping Fees</S.CartSubtext>
          <S.CartValue>R$ {getShipping()}</S.CartValue>
        </S.CartInfoRow>

        <S.CartInfoSpace />

        <S.CartInfoRow>
          <S.CartSubtextStrong>Total</S.CartSubtextStrong>
          <S.CartValueStrong>R$ {getTotal()}</S.CartValueStrong>
        </S.CartInfoRow>

        <DokiButton
          label="Secure Checkout"
          leftIcon='lock'
          style={{ marginTop: 'auto' }}
          onPress={confirmCheckout}
        />
      </S.CartInfo>
    </S.CartSafe>
  );
}