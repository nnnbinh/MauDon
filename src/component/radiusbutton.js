import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function RadiusButton({text, props}) {
  console.log(props);
  return (
    <TouchableOpacity onPress={props.handleSubmit} style={styles.roundButton}>
      <Text style={styles.roundButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  roundButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'orange',
  },
  roundButtonText: {
    color: 'white',
  },
});
