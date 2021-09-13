import React from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles} from '../styles/global';

export default function DonCuaToiItem({item, pressHandler}) {
  //   console.log('don cua toi: ' + item.status);
  if (item.status === 0) {
    return (
      <View style={GlobalStyles.items}>
        <View style={GlobalStyles.item_details}>
          <Text style={GlobalStyles.item_name}>{item.name}</Text>
          <Text>{item.id}</Text>
        </View>
        <Text style={GlobalStyles.status_pending}>Đang chờ</Text>
      </View>
    );
  } else if (item.status === 1) {
    return (
      <View style={GlobalStyles.items}>
        <View style={GlobalStyles.item_details}>
          <Text style={GlobalStyles.item_name}>{item.name}</Text>
          <Text>{item.id}</Text>
        </View>
        <Text style={GlobalStyles.status_reject}>Từ chối</Text>
      </View>
    );
  } else {
    return (
      <View style={GlobalStyles.items}>
        <View style={GlobalStyles.item_details}>
          <Text style={GlobalStyles.item_name}>{item.name}</Text>
          <Text>{item.id}</Text>
        </View>
        <Text style={GlobalStyles.status_approved}>Xong</Text>
      </View>
    );
  }
}
