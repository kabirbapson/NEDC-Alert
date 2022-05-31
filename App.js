  § import React from 'react';
import Home from './app/screens/Home';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import NavBottomBar from './app/navigations/NavBottomBar';

export default function App() {
  return (
    <NavigationContainer>
      {/* <ScreenNavigation /> */}
      <NavBottomBar />
    </NavigationContainer>
  );
}
