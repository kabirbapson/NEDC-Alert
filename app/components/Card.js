import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

function Card({cardStyle}) {
  return <View style={[styles.card, cardStyle]} />;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});
export default Card;
