import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Maudon from '../component/maudonItem';

export default function DsMaudon({navigation}) {
  const [maudon, setMaudon] = useState([
    {name: 'Đơn tạm hoãn NVQS', id: 1},
    {name: 'Giấy chứng nhận sinh viên', id: 2},
    {name: 'Đơn xin gia hạn học phí', id: 3},
    {name: 'Đơn xác nhận đóng học phí', id: 4},
    {name: 'Đơn đăng ký học lại-thi lại', id: 5},
    {name: 'Đơn xác nhận nợ môn học', id: 6},
    {name: 'Đơn xin vay vốn ngân hàng', id: 7},
    {name: 'Đơn cam kết trả nợ học phí', id: 8},
    {name: 'Đơn xin cấp bù học phí', id: 9},
    {name: 'Giấy xác nhận miễn giảm học phí ngành độc hại', id: 10},
  ]);

  const pressHandler = id => {
    const pass = maudon[id - 1].name;
    const route = 'Don ' + id;
    navigation.navigate(route, {
      name: pass,
    });
  };

  return (
    <View style={styles.containers}>
      <FlatList
        keyExtractor={item => item.id}
        data={maudon}
        renderItem={({item}) => (
          <Maudon item={item} pressHandler={pressHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
});
