import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
function HeaderComponent(props) {
  return (
    <View>
      <View style={styles.logo}>
        <Image
          style={styles.imageR}
          source={require('../../assets/images/nedc_logo.jpg')}
        />
        <Text style={styles.nedcA}>{'NEDC\nALERT'}</Text>
      </View>
      <View style={styles.wrapProfile}>
        <Feather name="bell" size={30} />
        <Feather name="mail" size={30} />
        <Image
          style={styles.imageP}
          source={require('../../assets/images/kbb.jpg')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginLeft: hp(25),
    marginTop: hp(25),
    flexDirection: 'row',
  },
  imageR: {
    borderRadius: 20,
  },
  imageP: {
    borderRadius: 10,
  },
  nedcA: {
    marginTop: hp(5),
    marginLeft: hp(6),
    fontFamily: 'Lato-Black',
    fontSize: 16,
    color: '#0D703A',
  },
  wrapProfile: {
    marginRight: hp(25),
    marginTop: hp(25),
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default HeaderComponent;
