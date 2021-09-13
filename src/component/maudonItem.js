import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {GlobalStyles} from '../styles/global';

export default function MaudonItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View style={GlobalStyles.items}>
        <Text style={GlobalStyles.item_text}>{item.name}</Text>
        <FAIcon
          name="chevron-right"
          size={25}
          color="black"
          style={GlobalStyles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}
