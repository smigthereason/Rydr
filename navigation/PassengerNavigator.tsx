import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PassengerSignUpScreen from '../screens/passenger/PassengerSignUpScreen';
import PaymentScreen from '../screens/passenger/PaymentScreen';
import RideSelectionScreen from '../screens/passenger/RideSelectionScreen';
import AppTourScreen from '../screens/shared/AppTourScreen';

const Stack = createStackNavigator();

export default function PassengerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#09090b' },
      }}
    >
      <Stack.Screen name="PassengerSignUp" component={PassengerSignUpScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="RideSelection" component={RideSelectionScreen} />
      <Stack.Screen name="AppTour" component={AppTourScreen} />
    </Stack.Navigator>
  );
}