import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';
import { ForgotPassword } from '@screens/ForgotPassword';
import { EmailSent } from '@screens/EmailSent';
import { FullName } from '@screens/SignUp/FullName';
import { EmailAddress } from '@screens/SignUp/EmailAddress';
import { Password } from '@screens/SignUp/Password';
import { Phone } from '@screens/SignUp/Phone';
import { Code } from '@screens/SignUp/Code';
import { FinishRegister } from '@screens/SignUp/FinishRegister';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="EmailSent" component={EmailSent} />
      <Screen name="SignUpFullName" component={FullName} />
      <Screen name="EmailAddress" component={EmailAddress} />
      <Screen name="Password" component={Password} />
      <Screen name="Phone" component={Phone} />
      <Screen name="Code" component={Code} />
      <Screen name="FinishRegister" component={FinishRegister} />
    </Navigator>
  )
}
