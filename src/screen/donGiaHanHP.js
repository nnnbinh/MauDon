import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import {GlobalStyles} from '../styles/global';
import SendData from '../sendData';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReviewSchema = yup.object({
  tên: yup.string().required(),
  ngày_sinh: yup.mixed().notOneOf(['Chọn ngày']),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  ngành: yup.string().required(),
  sdt: yup.number().required().positive().integer(),
  học_kỳ: yup.string().required(),
  năm_học: yup.string().required(),
  lý_do: yup.string().required(),
  gia_hạn_đến: yup.mixed().notOneOf(['Chọn ngày']),
});

export default function DonGiahanHP({navigation}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View style={GlobalStyles.containers}>
          <Formik
            enableReinitialize={true}
            validationSchema={ReviewSchema}
            initialValues={{
              tên: '',
              ngày_sinh: 'Chọn ngày',
              mssv: '',
              lớp: '',
              ngành: '',
              sdt: '',
              năm_học: '',
              học_kỳ: '1',
              gia_hạn: 'Học kỳ',
              dsmôn: [],
              lý_do: 'Tạm hoãn NVQS',
              gia_hạn_đến: 'Chọn ngày',
            }}
            onSubmit={(val, actions) => {
              SendData(val);
              actions.resetForm();
              navigation.navigate('Dk thanh cong');
            }}>
            {props => (
              <View>
                {/* tên */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.tên && props.errors.tên
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Họ và tên: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Họ tên"
                  onChangeText={props.handleChange('tên')}
                  onBlur={props.handleBlur('tên')}
                  value={props.values.tên}
                />
                {/* ngày sinh */}
                <Text style={GlobalStyles.label}>Ngày sinh: </Text>
                <TouchableOpacity
                  onPress={showDatePicker}
                  onBlur={props.handleBlur('ngày_sinh')}>
                  <View style={GlobalStyles.dateInput}>
                    <Text style={GlobalStyles.font15}>
                      {props.values.ngày_sinh}
                    </Text>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={date => {
                        const res =
                          date.getDate() +
                          '/' +
                          date.getMonth() +
                          '/' +
                          date.getFullYear();
                        props.setFieldValue('ngày_sinh', res);
                      }}
                      onCancel={hideDatePicker}
                    />
                  </View>
                </TouchableOpacity>
                {/* MSSV */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.mssv && props.errors.mssv
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>MSSV: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="mssv"
                  onChangeText={props.handleChange('mssv')}
                  value={props.values.mssv}
                  onBlur={props.handleBlur('mssv')}
                  keyboardType="numeric"
                />

                <View style={GlobalStyles.flexDirRow}>
                  <View style={[GlobalStyles.flex1, GlobalStyles.MR10]}>
                    {/* lớp */}
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.lớp && props.errors.lớp
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Lớp: </Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="lớp"
                      onChangeText={props.handleChange('lớp')}
                      value={props.values.lớp}
                      onBlur={props.handleBlur('lớp')}
                    />
                  </View>
                  <View style={GlobalStyles.flex1}>
                    {/* Ngành */}
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.ngành && props.errors.ngành
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Ngành: </Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="Ngành"
                      onChangeText={props.handleChange('ngành')}
                      value={props.values.ngành}
                      onBlur={props.handleBlur('ngành')}
                    />
                  </View>
                </View>
                {/* SĐT */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.sdt && props.errors.sdt
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>SĐT: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  onChangeText={props.handleChange('sdt')}
                  value={props.values.sdt}
                  onBlur={props.handleBlur('sdt')}
                  keyboardType={'numeric'}
                />
                <View style={GlobalStyles.flexDirRow}>
                  {/* Học kỳ */}
                  <View style={[GlobalStyles.flex1, GlobalStyles.MR10]}>
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.học_kỳ && props.errors.học_kỳ
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Học kỳ: </Text>
                    <View style={GlobalStyles.picker}>
                      <Picker
                        selectedValue={props.values.học_kỳ}
                        onValueChange={props.handleChange('học_kỳ')}>
                        <Picker.Item label="1" value={'1'} />
                        <Picker.Item label="2" value={'2'} />
                        <Picker.Item label="hè" value={'hè'} />
                      </Picker>
                    </View>
                  </View>
                  <View style={GlobalStyles.flex1}>
                    {/* Năm học */}
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.năm_học && props.errors.năm_học
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Năm học: </Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="20__-20__"
                      onChangeText={props.handleChange('năm_học')}
                      value={props.values.năm_học}
                      onBlur={props.handleBlur('năm_học')}
                      keyboardType={'numeric'}
                    />
                  </View>
                </View>

                {/* Hình thức gia hạn */}
                <Text style={GlobalStyles.label}>Gia hạn theo</Text>
                <RadioButton.Group
                  onValueChange={val => {
                    props.setFieldValue('gia_hạn', val);
                    props.values.gia_hạn === 'Học kỳ'
                      ? props.setFieldValue('dsmôn', [''])
                      : props.setFieldValue('dsmôn', []);
                  }}
                  value={props.values.gia_hạn}>
                  <View style={[GlobalStyles.radio, GlobalStyles.flexDirRow]}>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Học kỳ" />
                      <Text style={GlobalStyles.font22}>Học kỳ</Text>
                    </View>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Môn" />
                      <Text style={GlobalStyles.font22}>Môn</Text>
                    </View>
                  </View>
                </RadioButton.Group>

                {props.values.dsmôn.map(({tên}, index) => (
                  <View key={index.toString()}>
                    <View style={[GlobalStyles.flexDirRow, GlobalStyles.MT15]}>
                      <Text style={GlobalStyles.label2}>Môn: </Text>

                      <TouchableOpacity
                        style={GlobalStyles.roundButtonCancel}
                        onPress={() => {
                          let newValues = [...props.values.dsmôn];
                          newValues.splice(index, 1);
                          props.setFieldValue('dsmôn', newValues);
                        }}>
                        <Text style={GlobalStyles.font20}>x</Text>
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      style={GlobalStyles.input}
                      key={'tên môn ' + index.toString()}
                      onChangeText={props.handleChange(`dsmôn[${index}].tên`)}
                      value={props.values.dsmôn[index].tên}
                    />
                  </View>
                ))}
                {props.values.gia_hạn !== 'Học kỳ' ? (
                  <TouchableOpacity
                    style={GlobalStyles.roundButtonAdd}
                    onPress={() =>
                      props.setFieldValue('dsmôn', [
                        ...props.values.dsmôn,
                        {tên: '', lý_do: '<4'},
                      ])
                    }>
                    <Text
                      style={[GlobalStyles.colorWhite, GlobalStyles.font22]}>
                      +
                    </Text>
                  </TouchableOpacity>
                ) : null}

                {/* Thời gian gia hạn */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.gia_hạn_đến && props.errors.gia_hạn_đến
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Gia hạn đến: </Text>
                <TouchableOpacity
                  onPress={showDatePicker2}
                  onBlur={props.handleBlur('gia_hạn_đến')}>
                  <View style={GlobalStyles.dateInput}>
                    <Text style={GlobalStyles.font15}>
                      {props.values.gia_hạn_đến}
                    </Text>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible2}
                      mode="date"
                      onConfirm={date => {
                        const res =
                          date.getDate() +
                          '/' +
                          date.getMonth() +
                          '/' +
                          date.getFullYear();
                        props.setFieldValue('gia_hạn_đến', res);
                      }}
                      onCancel={hideDatePicker2}
                    />
                  </View>
                </TouchableOpacity>
                {/* Lý do */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.lý_do && props.errors.lý_do
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Lý do: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Lý do"
                  onChangeText={props.handleChange('lý_do')}
                  value={props.values.lý_do}
                  onBlur={props.handleBlur('lý_do')}
                  multiline={true}
                />

                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={GlobalStyles.roundButton1}>
                  <Text style={[GlobalStyles.colorWhite, GlobalStyles.font20]}>
                    Nộp đơn
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
