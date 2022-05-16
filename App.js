import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text>
        Apps
        <Icons name="mail" size={30} color="red" />
        {/* test icons */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
