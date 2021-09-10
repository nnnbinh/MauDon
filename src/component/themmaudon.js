import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export default function Themmaudon({submitHandler}) {
  const [text, setText] = useState('');
  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="them mau don"
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button onPress={() => submitHandler(text)} title="Add" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'black',
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
