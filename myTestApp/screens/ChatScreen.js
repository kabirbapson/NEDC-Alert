import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
      <Button title="Click Here" onPress={() => alert('Botton Hit')} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
