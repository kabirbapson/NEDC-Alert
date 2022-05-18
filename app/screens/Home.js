import React from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import {COLORS} from '../../assets/colors';
import Card from '../components/Card';
import {hp, wp} from '../utils/dpTopx';

const DATA = [
  {
    id: 1,
    iconName: 'mail',
    title: 'Title',
    subtitle: 'Subtitle',
  },
  {
    id: 2,
    iconName: 'mail',
    title: 'Title',
    subtitle: 'Subtitle',
  },
  {
    id: 3,
    iconName: 'mail',
    title: 'Title',
    subtitle: 'Subtitle',
  },
  {
    id: 4,
    iconName: 'mail',
    title: 'Title',
    subtitle: 'Subtitle',
  },
];

const Item = ({item}) => (
  <Card cardItem={item} cardStyle={{marginRight: 10, marginBottom: 10}} />
);

function Home() {
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>jjfjfjf</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.centre}>
          <Text style={styles.centreText}>Emergency Assistance</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
        {/* <View style={styles.cardView}>
          <Card cardStyle={styles.card1} />
          <Card cardStyle={styles.card2} />
        </View>
        <View style={styles.cardView}>
          <Card cardStyle={styles.card3} />

          <Card cardStyle={styles.card4} iconName="mail" />
        </View> */}

        {/* <View style={styles.footer}>
          <Text>Heyyy</Text>
        </View>
      </View> */}
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
    paddingHorizontal: 20,
  },
  centre: {
    // flex: 1,
  },
  centreText: {
    paddingVertical: 10,
    paddingRight: 150,
    fontFamily: 'Lato-Black',
    fontSize: 18,
  },
  cardView: {
    flexDirection: 'row',
    // padding: 2,
  },
  card1: {
    backgroundColor: COLORS.mediumCyan,
    // padding: 2,
    margin: 20,
  },
  card2: {
    backgroundColor: COLORS.sandyBrown,
    margin: 20,
  },
  card3: {
    margin: 20,
    backgroundColor: COLORS.lightOrange,
  },
  card4: {
    margin: 20,
    backgroundColor: COLORS.lightYellow,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    // flexDirection: 'row',
    backgroundColor: '#264653',
    width: 322,
    height: 60,
    borderRadius: 15,
    margin: 10,
  },
});
export default Home;
