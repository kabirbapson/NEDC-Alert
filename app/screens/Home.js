import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from '../components/Card';
function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Heyyy</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.centre}>
          <Text style={styles.centreText}>Emergency Assistance</Text>

          <Card />
        </View>
        <View style={styles.footer}>
          <Text>Heyyy</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  container2: {
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#264653',
    width: '100%',
    height: 297,
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
  footer: {
    // flexDirection: 'row',
    backgroundColor: '#264653',
    width: 322,
    height: 60,
    borderRadius: 15,
  },
});
export default Home;
