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
import {GlobalStyles} from '../styles/global';
import SendData from '../sendData';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReviewSchema = yup.object({
  tên: yup.string().required(),
  mssv: yup.number().required().positive().integer(),
  ngày_sinh: yup.mixed().notOneOf(['Chọn ngày']),
  hộ_khẩu: yup.string().required(),
  Hien_tại_là_SV_Năm_thứ: yup.number().required().positive().integer(),
  học_kỳ: yup.string().required(),
  lớp: yup.string().required(),
  Năm_hoc: yup.number().required().positive().integer(),
  khoa: yup.string().required(),
  Nganh_học: yup.string().required(),
  khóa: yup.number().required().positive().integer(),
  hệ: yup.string().required(),
  Loại_hình_đào_tạo: yup.string().required(),
});

export default function GiayXacNhanMienGiamHPNDH({navigation}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
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
              form: 'Giấy xác nhận miễn giảm học phí ngành độc hại',
              tên: '',
              mssv: '',
              ngày_sinh: 'Chọn ngày',
              giới_tính: 'nam',
              hộ_khẩu: '',
              Hien_tại_là_SV_Năm_thứ: '',
              học_kỳ: '1',
              lớp: '',
              Năm_hoc: '',
              khoa: '',
              Nganh_học: '',
              khóa: '',
              hệ: 'CĐ Chính Quy',
              Loại_hình_đào_tạo: '',
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
                  placeholder="Họ và tên"
                  onChangeText={props.handleChange('tên')}
                  onBlur={props.handleBlur('tên')}
                  value={props.values.tên}
                />
                <View>
                  <Text style={GlobalStyles.colorCrimson}>
                    {props.touched.ngày_sinh && props.errors.ngày_sinh
                      ? 'Thông tin không chính xác'
                      : ''}
                  </Text>
                </View>
                <View style={GlobalStyles.flexDirRow}>
                  {/* ngày sinh */}
                  <View style={[GlobalStyles.flex1, GlobalStyles.MR10]}>
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
                  </View>
                  {/* giới tính */}
                  <View style={GlobalStyles.flex1}>
                    <Text style={GlobalStyles.label}>Giới tính: </Text>
                    <View style={GlobalStyles.picker}>
                      <Picker
                        selectedValue={props.values.giới_tính}
                        onValueChange={props.handleChange('giới_tính')}>
                        <Picker.Item
                          label="Nam"
                          value={'Nam'}
                          style={GlobalStyles.font15}
                        />
                        <Picker.Item
                          label="Nữ"
                          value={'Nữ'}
                          style={GlobalStyles.font15}
                        />
                      </Picker>
                    </View>
                  </View>
                </View>

                {/* MSSV */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.mssv && props.errors.mssv
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>MSSV: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="MSSV"
                  onChangeText={props.handleChange('mssv')}
                  value={props.values.mssv}
                  onBlur={props.handleBlur('mssv')}
                  keyboardType={'numeric'}
                />

                {/* Hộ khẩu thường trú (ghi đầy đủ): * */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.hộ_khẩu && props.errors.hộ_khẩu
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Hộ khẩu thường trú (ghi đầy đủ):{' '}
                </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Hộ khẩu thường trú (ghi đầy đủ)"
                  onChangeText={props.handleChange('hộ_khẩu')}
                  value={props.values.hộ_khẩu}
                  onBlur={props.handleBlur('hộ_khẩu')}
                />

                {/*Hien_tại_là_SV_Năm_thứ */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Hien_tại_là_SV_Năm_thứ &&
                  props.errors.Hien_tại_là_SV_Năm_thứ
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Hiện là sinh viên năm thứ:{' '}
                </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Hiện là sinh viên năm thứ"
                  onChangeText={props.handleChange('Hien_tại_là_SV_Năm_thứ')}
                  value={props.values.Hien_tại_là_SV_Năm_thứ}
                  onBlur={props.handleBlur('Hien_tại_là_SV_Năm_thứ')}
                  keyboardType={'numeric'}
                />

                {/* Học kỳ */}
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
                {/* Năm Học*/}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Năm_hoc && props.errors.Năm_hoc
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Năm học: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Năm học"
                  onChangeText={props.handleChange('Năm_hoc')}
                  value={props.values.Năm_hoc}
                  onBlur={props.handleBlur('Năm_hoc')}
                  Keyboard={'numeric'}
                />
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

                {/*Ngành Học: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Nganh_học && props.errors.Nganh_học
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Ngành Học:</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Ngành Học"
                  onChangeText={props.handleChange('Nganh_học')}
                  value={props.values.Nganh_học}
                  onBlur={props.handleBlur('Nganh_học')}
                />

                {/* Khóa */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.khóa && props.errors.khóa
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Khóa Học: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Khóa Học"
                  onChangeText={props.handleChange('khóa')}
                  value={props.values.khóa}
                  onBlur={props.handleBlur('khóa')}
                  keyboardType={'numeric'}
                />

                {/* Hệ */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.hệ && props.errors.hệ
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Hệ: </Text>
                <View style={GlobalStyles.picker}>
                  <Picker
                    selectedValue={props.values.hệ}
                    onValueChange={props.handleChange('hệ')}>
                    <Picker.Item label="CĐ Chính Quy" value={'CĐ Chính Quy'} />
                    <Picker.Item label="CĐ Nghề" value={'CĐ Nghề'} />
                    <Picker.Item
                      label="Trung Cấp Chuyên Nghiệp"
                      value={'Trung Cấp Chuyên Nghiệp'}
                    />
                  </Picker>
                </View>
                {/* Loại hình đào tạo: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Loại_hình_đào_tạo &&
                  props.errors.Loại_hình_đào_tạo
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Loại hình đào tạo: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Loại hình đào tạo"
                  onChangeText={props.handleChange('Loại_hình_đào_tạo')}
                  value={props.values.Loại_hình_đào_tạo}
                  onBlur={props.handleBlur('Loại_hình_đào_tạo')}
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
