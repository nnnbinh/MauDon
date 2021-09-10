import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function MaudonItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View style={styles.items}>
        <Text style={styles.item_text}>{item.name}</Text>
        <FAIcon
          name="chevron-right"
          size={25}
          color="black"
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
  },
  item_text: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 2,
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    padding: 20,
  },
});
