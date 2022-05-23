import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import ChatScreen from '../screens/ChatScreen';
import FindScreen from '../screens/FindScreen';
import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/bpp.png')}
                resizeMethod="auto"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'yellow' : 'orange',
                }}
              />
              <Text
                style={{color: focused ? 'yellow' : 'orange', fontSize: 12}}>
                Homie
              </Text>
            </View>;
          },
        }}
      />
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'red',
  },
});
export default Tabs;
