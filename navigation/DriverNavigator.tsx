import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DriverSignUpScreen from '../screens/driver/DriverSignUpScreen';
import DocumentUploadScreen from '../screens/driver/DocumentUploadScreen';
import ApplicationStatusScreen from '../screens/driver/ApplicationStatusScreen';

const Stack = createStackNavigator();

export default function DriverNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#09090b' },
      }}
    >
      <Stack.Screen name="DriverSignUp" component={DriverSignUpScreen} />
      <Stack.Screen name="DocumentUpload" component={DocumentUploadScreen} />
      <Stack.Screen name="ApplicationStatus" component={ApplicationStatusScreen} />
    </Stack.Navigator>
  );
}