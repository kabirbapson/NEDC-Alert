import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
function Card({style}) {
  return <View style={styles.card} />;
}
const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    borderRadius: (width * height) / 2,
  },
});
export default Card;
