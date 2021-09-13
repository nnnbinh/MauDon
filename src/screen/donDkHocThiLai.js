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
import {RadioButton} from 'react-native-paper';
import {GlobalStyles} from '../styles/global';
import SendData from '../sendData';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReviewSchema = yup.object({
  tên: yup.string().required(),
  ngày_sinh: yup.mixed().notOneOf(['Chọn ngày']),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa_dk: yup.number().required().positive().integer(),
  hạn_cuối: yup.mixed().notOneOf(['Chọn ngày']),
});

export default function DonDkHocThiLai({navigation}) {
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
              form: 'Đơn đăng kỳ học lại - thi lại',
              tên: '',
              ngày_sinh: 'Chọn ngày',
              mssv: '',
              lớp: '',
              khoa: '',
              khóa_dk: '',
              hạn_cuối: 'Chọn ngày',
              môn: [{tên: '', lý_do: '<4'}],
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
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.ngày_sinh && props.errors.ngày_sinh
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
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
                  keyboardType={'numeric'}
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
                    {/* Khoa */}
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.khoa && props.errors.khoa
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Khoa: </Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="khoa"
                      onChangeText={props.handleChange('khoa')}
                      value={props.values.khoa}
                      onBlur={props.handleBlur('khoa')}
                    />
                  </View>
                </View>
                <View style={GlobalStyles.flexDirRow}>
                  <View style={[GlobalStyles.flex1, GlobalStyles.MR10]}>
                    {/* Khóa đăng ký */}
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.khóa_dk && props.errors.khóa_dk
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Khóa đăng ký thi:</Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="khóa_đk"
                      onChangeText={props.handleChange('khóa_dk')}
                      value={props.values.khóa_dk}
                      onBlur={props.handleBlur('khóa_dk')}
                      keyboardType={'numeric'}
                    />
                  </View>
                  <View style={GlobalStyles.flex1}>
                    {/* Hạn cuối đk */}
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.hạn_cuối && props.errors.hạn_cuối
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Hạn cuối: </Text>
                    <TouchableOpacity
                      onPress={showDatePicker2}
                      onBlur={props.handleBlur('hạn_cuối')}>
                      <View style={GlobalStyles.dateInput}>
                        <Text style={GlobalStyles.font15}>
                          {props.values.hạn_cuối}
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
                            props.setFieldValue('hạn_cuối', res);
                          }}
                          onCancel={hideDatePicker2}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                {props.values.môn.map(({tên}, index) => (
                  <View key={index.toString()}>
                    <View style={[GlobalStyles.flexDirRow, GlobalStyles.MT15]}>
                      <Text style={GlobalStyles.label2}>Môn: </Text>

                      <TouchableOpacity
                        style={GlobalStyles.roundButtonCancel}
                        onPress={() => {
                          let newValues = [...props.values.môn];
                          newValues.splice(index, 1);
                          props.setFieldValue('môn', newValues);
                        }}>
                        <Text style={GlobalStyles.font20}>x</Text>
                      </TouchableOpacity>
                    </View>
                    <TextInput
                      style={GlobalStyles.input}
                      key={'tên môn ' + index.toString()}
                      onChangeText={props.handleChange(`môn[${index}].tên`)}
                      value={props.values.môn[index].tên}
                    />
                    <RadioButton.Group
                      key={'lý do ' + index.toString()}
                      onValueChange={props.handleChange(`môn[${index}].lý_do`)}
                      value={props.values.môn[index].lý_do}>
                      <View
                        style={[GlobalStyles.radio, GlobalStyles.flexDirRow]}>
                        <View style={GlobalStyles.flexDirRow}>
                          <RadioButton
                            value="Cải thiện điểm"
                            key={'lý do button Cải thiện điểm' + index.toString}
                          />
                          <Text
                            style={GlobalStyles.font22}
                            key={'lý do text Cải thiện điểm' + index.toString}>
                            Cải thiện điểm
                          </Text>
                        </View>
                        <View style={GlobalStyles.flexDirRow}>
                          <RadioButton
                            value="<4"
                            key={'lý do button <4' + index.toString}
                          />
                          <Text
                            style={GlobalStyles.font22}
                            key={'lý do text >4' + index.toString}>
                            {'<4'}
                          </Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                  </View>
                ))}

                <TouchableOpacity
                  style={GlobalStyles.roundButtonAdd}
                  onPress={() =>
                    props.setFieldValue('môn', [
                      ...props.values.môn,
                      {tên: '', lý_do: '<4'},
                    ])
                  }>
                  <Text style={[GlobalStyles.colorWhite, GlobalStyles.font22]}>
                    +
                  </Text>
                </TouchableOpacity>

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
