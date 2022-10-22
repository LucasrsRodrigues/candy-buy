import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from 'src/hooks/auth.hook';
import { AppRoutes } from './app.routes';
import { CartDiv } from '@components/CartDiv';
import { useCart } from 'src/hooks/cart.hook';

export default function Routes() {
  const { user } = useAuth();
  const { itens } = useCart();

  return (
    <NavigationContainer>
      {user ? (
        <Fragment>
          <AppRoutes />
          {itens.length > 0 && <CartDiv />}
        </Fragment>
      ) : <AuthRoutes />}
    </NavigationContainer>
  )
}