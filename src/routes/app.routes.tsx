import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Restaurant } from '@screens/Restaurant';
import { Cart } from '@screens/Cart';
import { Profile } from '@screens/Profile';
import { Membership } from '@screens/Membership';
import { EditProfile } from '@screens/EditProfile';
import { MyOrders } from '@screens/MyOrders';
import { Payments } from '@screens/Payments';
import { Addresses } from '@screens/Addresses';
import { AddNewCard } from '@screens/AddNewCard';
import { EditAddress } from '@screens/EditAddress';
import { Shipping } from '@screens/Shipping';
import { useCart } from 'src/hooks/cart.hook';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { handleShowCart } = useCart();

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} listeners={{ focus: () => handleShowCart(true) }} />
      <Screen name="Restaurant" component={Restaurant} listeners={{ focus: () => handleShowCart(true) }} />
      <Screen name="Cart" component={Cart} listeners={{ focus: () => handleShowCart(false) }} />

      <Screen name="Profile" component={Profile} listeners={{ focus: () => handleShowCart(false) }} />
      <Screen name="EditProfile" component={EditProfile} listeners={{ focus: () => handleShowCart(false) }} />
      <Screen name="MyOrders" component={MyOrders} listeners={{ focus: () => handleShowCart(false) }} />
      <Screen name="Payments" component={Payments} listeners={{ focus: () => handleShowCart(false) }} />
      <Screen name="Addresses" component={Addresses} listeners={{ focus: () => handleShowCart(false) }} />

      <Screen name="Membership" component={Membership} listeners={{ focus: () => handleShowCart(true) }} />
      <Screen name="AddNewCard" component={AddNewCard} listeners={{ focus: () => handleShowCart(true) }} />
      <Screen name="EditAddress" component={EditAddress} listeners={{ focus: () => handleShowCart(true) }} />

      <Screen name="Shipping" component={Shipping} listeners={{ focus: () => handleShowCart(false) }} />
    </Navigator>
  );
}