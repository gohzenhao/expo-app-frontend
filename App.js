import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './components/Login';
import { Member } from './components/Member';
import { AsyncStorage } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Login">

      <Stack.Screen
      name="Login"
      component={Login}/>

      <Stack.Screen
      name="Member"
      component={Member}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}
