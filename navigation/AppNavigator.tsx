import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/shared/WelcomeScreen';
import AccountTypeScreen from '../screens/shared/AccountTypeScreen';
import VerificationScreen from '../screens/shared/VerificationScreen';
import PassengerNavigator from './PassengerNavigator';
import DriverNavigator from './DriverNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#09090b' },
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="AccountType" component={AccountTypeScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Passenger" component={PassengerNavigator} />
        <Stack.Screen name="Driver" component={DriverNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}