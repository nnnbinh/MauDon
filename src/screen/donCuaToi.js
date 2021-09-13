import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Maudon from '../component/doncuatoiItem';

export default function DonCuaToi({navigation}) {
  const [maudon, setMaudon] = useState([
    {name: 'Đơn tạm hoãn NVQS', status: 0, id: 'ĐTHNVQS00001'},
    {name: 'Giấy chứng nhận sinh viên', status: 1, id: 'GXNSV00058'},
    {name: 'Đơn xin gia hạn học phí', status: 2, id: 'ĐGHHP0000112'},
    {name: 'Đơn xác nhận đóng học phí', status: 1, id: 'ĐXNHP999912'},
    {name: 'Đơn đăng ký học lại-thi lại', status: 1, id: 'ĐHLTL001223'},
    {name: 'Đơn xác nhận nợ môn học', status: 2, id: 'ĐXNNMH123567'},
    {name: 'Đơn xin vay vốn ngân hàng', status: 0, id: 'ĐVVNHCS15266'},
    {name: 'Đơn cam kết trả nợ học phí', status: 0, id: 'ĐTNHP123567'},
    {name: 'Đơn xin cấp bù học phí', status: 1, id: 'ĐCBHP912552'},
    {
      name: 'Giấy xác nhận miễn giảm học phí ngành độc hại',
      status: 2,
      id: 'GXNMGHP91232',
    },
  ]);

  return (
    <View style={styles.containers}>
      <FlatList
        keyExtractor={item => item.id}
        data={maudon}
        renderItem={({item}) => <Maudon item={item} />}
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
