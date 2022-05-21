import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function TitleTextComponent() {
  return (
    <View>
      <Text style={styles.centreText}>Emergency Assistance</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  centreText: {
    paddingVertical: 10,
    paddingRight: hp(150),
    fontFamily: 'Lato-Black',
    fontSize: 18,
  },
});
export default TitleTextComponent;
