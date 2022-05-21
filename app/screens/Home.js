import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../assets/colors';
import {hp, wp} from '../utils/dpTopx';
import CardComponent from '../components/CardComponent';
import HeaderComponent from '../components/HeaderComponent';
import TitleTextComponent from '../components/TitleTextComponent';

const DATA = [
  {
    id: 1,
    iconName: 'mail',
    title: 'Emergency',
    subtitle: 'List of emergency phone numbers',
    bgColor: COLORS.mediumCyan,
  },
  {
    id: 2,
    iconName: 'eye',
    title: 'Info & Tips',
    subtitle: 'Know something? Say something',
    bgColor: COLORS.sandyBrown,
  },
  {
    id: 3,
    iconName: 'alert-circle',
    title: 'Happening Now',
    subtitle: "What's happening in your area?",
    bgColor: COLORS.lightOrange,
  },
  {
    id: 4,
    iconName: 'message-circle',
    title: 'Education',
    subtitle: 'How can we help in the education sector?',
    bgColor: COLORS.lightYellow,
  },
];

const Item = ({item}) => (
  <CardComponent
    cardItem={item}
    iconName={item.iconName}
    cardStyle={{
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: item.bgColor,
    }}
  />
);

function Home() {
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderComponent />
      </View>
      <View style={styles.container2}>
        {/* <View style={styles.centre}> */}
        {/* <Text style={styles.centreText}>Emergency Assistance</Text> */}
        <TitleTextComponent />
        {/* </View> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />

        <View style={styles.footer}>
          <Text>Hheyyy</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  container2: {
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#264653',
    width: '100%',
    height: hp(297),
    paddingHorizontal: hp(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  centreText: {
    paddingVertical: 10,
    paddingRight: hp(150),
    fontFamily: 'Lato-Black',
    fontSize: 18,
  },
  footer: {
    // position: 'absolute',
    // bottom: 20,
    // // flexDirection: 'row',
    // backgroundColor: 'red',
    backgroundColor: '#264653',
    width: 322,
    height: 60,
    borderRadius: 15,
    // marginBottom: 20,
  },
});
export default Home;
