import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function Header({name}) {
  console.log('header.js: ' + name);
  return <Text style={styles.title}>{name}</Text>;
}

const styles = StyleSheet.create({
  headers: {
    // flex: 1,
    backgroundColor: '#F47828',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    flex: 2,
  },
});
