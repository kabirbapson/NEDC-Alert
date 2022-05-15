import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.screen}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    justifyContent:'center',
    alignItems:'center',
  }
})