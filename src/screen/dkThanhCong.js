import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function DkThanhCong({navigation}) {
  return (
    <View style={styles.containers}>
      <Text>Đăng ký thành công</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
});
