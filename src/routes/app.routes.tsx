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


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Restaurant" component={Restaurant} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Membership" component={Membership} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="MyOrders" component={MyOrders} />
      <Screen name="Payments" component={Payments} />
      <Screen name="Addresses" component={Addresses} />
      <Screen name="AddNewCard" component={AddNewCard} />
    </Navigator>
  );
}