import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bruh</Text>
      <Icon name="ios-book" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B262C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 50,
  },
});
