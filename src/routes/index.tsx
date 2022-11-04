import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from 'src/hooks/auth.hook';
import { AppRoutes } from './app.routes';
import { CartDiv } from '@components/CartDiv';

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <Fragment>
          <AppRoutes />

          <CartDiv />
        </Fragment>
      ) : <AuthRoutes />}
    </NavigationContainer>
  )
}