import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../assets/colors';
import Feather from 'react-native-vector-icons/Feather';
import {hp, wp} from '../utils/dpTopx';

function Card({cardStyle, cardItem}) {
  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.rectRadius} cardStyle>
        <Feather name="mail" color="red" size={hp(30)} />
      </View>
      <View style={styles.texty}></View>
        <Text>{cardItem.title}</Text>
        <Text>{cardItem.subtitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'yellow',
    width: wp(150),
    height: hp(150),
    borderRadius: 8,
    padding: 10,
  },
  rectRadius: {
    width: wp(40),
    height: hp(40),
    backgroundColor: COLORS.darkCyan,
    borderRadius: hp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  texty:{
    padding:10
  }
});
export default Card;
