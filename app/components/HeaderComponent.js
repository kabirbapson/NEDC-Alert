import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import TitleTextComponent from './TitleTextComponent';
function HeaderComponent(props) {
  return (
    <View>
      <View style={styles.logo}>
        <View style={styles.logoNEDC}>
          <Image
            style={styles.imageR}
            source={require('../../assets/images/nedc_logo.jpg')}
          />
          <Text style={styles.nedcA}>{'NEDC\nALERT'}</Text>
        </View>
        <View style={styles.wrapProfile}>
          {/* <View style={styles.featherIcon}> */}
          <Feather style={styles.featherIcon} name="bell" size={30} />
          <Feather style={styles.featherIcon} name="mail" size={30} />
          {/* </View> */}
          <Image
            style={styles.imageP}
            source={require('../../assets/images/kbb.jpg')}
          />
        </View>
      </View>
      <View style={styles.welcomeTitle}>
        <TitleTextComponent
          textStyle={styles.textTitleEA}
          textTitle={'Welcome to NEDC-Alert'}
        />
        <TitleTextComponent
          textStyle={styles.textSubTitle}
          textTitle={
            'your direct link to North-East\n Development Commission...'
          }
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
  logoNEDC: {
    flexDirection: 'row',
  },
  imageR: {
    borderRadius: 20,
  },
  imageP: {
    marginHorizontal: 5,
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
    marginLeft: hp(70),
    marginTop: hp(10),
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  featherIcon: {
    // flexDirection:'row',
    marginHorizontal: 5,
  },
  welcomeTitle: {
    width: '100%',
    marginTop: 50,
    marginLeft: 20,
  },
  textTitleEA: {
    marginVertical: 10,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Lato-Black',
  },
  textSubTitle: {
    fontSize: 14,
    color: 'white',
  },
});
export default HeaderComponent;
