import React from 'react';
import Home from './app/screens/Home';
import {Text, View} from 'react-native';
import Tabs from './myTestApp/navigation/tabs';
import Buttons from './myNavBarButtons/navigations/Buttons';
import HomeScreen from './NavTest/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './app/navigations/ScreenNavigation';
export default function App() {
  return (
    <NavigationContainer>
      <ScreenNavigation />
    </NavigationContainer>
  );
}
