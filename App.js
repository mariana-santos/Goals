import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Screens
import Home from './src/screens/Home';
import TopBarNavigator from './src/navigators/TopBarNavigator';

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TopTabNav" component={TopBarNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
