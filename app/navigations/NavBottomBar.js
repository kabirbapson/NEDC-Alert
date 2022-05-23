import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import Home from '../screens/Home';
import Location from '../screens/Location';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function NavBottomBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Location" component={Location} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
