import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

export default function Button({text, onPress, iconName}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>
          {text}
          {iconName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 8,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
