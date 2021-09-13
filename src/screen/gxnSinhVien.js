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
  nơi_sinh: yup.string().required(),
  địa_chỉ: yup.string().required(),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.number().required().positive().integer(),
  năm: yup.number().required().positive().integer(),
  lý_do: yup.string().required(),
  kỷ_luật: yup.string().required(),
});

export default function GxnSinhVien({navigation}) {
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
              form: 'Giấy xác nhận sinh viên',
              tên: '',
              ngày_sinh: 'Chọn ngày',
              giới_tính: 'nam',
              nơi_sinh: '',
              địa_chỉ: '',
              mssv: '',
              lớp: '',
              khoa: '',
              khóa: '',
              năm: '',
              học_kỳ: '1',
              hệ: 'CĐ Chính Quy',
              lý_do: 'Tạm hoãn NVQS',
              kỷ_luật: 'Không',
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
                {/* nơi sinh */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.nơi_sinh && props.errors.nơi_sinh
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Nơi sinh: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="TPHCM"
                  onChangeText={props.handleChange('nơi_sinh')}
                  value={props.values.nơi_sinh}
                  onBlur={props.handleBlur('nơi_sinh')}
                />
                {/* địa chỉ */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.địa_chỉ && props.errors.địa_chỉ
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Địa chỉ: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Địa chỉ"
                  onChangeText={props.handleChange('địa_chỉ')}
                  value={props.values.địa_chỉ}
                  onBlur={props.handleBlur('địa_chỉ')}
                />
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
                  {/* Khóa */}
                  <View style={[GlobalStyles.flex1, GlobalStyles.MR10]}>
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.khóa && props.errors.khóa
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Khóa: </Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="khóa"
                      onChangeText={props.handleChange('khóa')}
                      value={props.values.khóa}
                      onBlur={props.handleBlur('khóa')}
                      keyboardType={'numeric'}
                    />
                  </View>
                  {/* Năm thứ */}
                  <View style={GlobalStyles.flex1}>
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.năm && props.errors.năm
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Năm thứ: </Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="năm"
                      onChangeText={props.handleChange('năm')}
                      value={props.values.năm}
                      onBlur={props.handleBlur('năm')}
                      keyboardType={'numeric'}
                      maxLength={4}
                    />
                  </View>
                </View>
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

                {/* bị kỷ luật? */}
                <Text style={GlobalStyles.label}>
                  Có bị cảnh cáo từ hình thức kỷ luật không?:
                </Text>
                <RadioButton.Group
                  onValueChange={props.handleChange('kỷ_luật')}
                  value={props.values.kỷ_luật}>
                  <View style={[GlobalStyles.radio, GlobalStyles.flexDirRow]}>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Có" />
                      <Text style={GlobalStyles.font22}>Có</Text>
                    </View>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Không" />
                      <Text style={GlobalStyles.font22}>Không</Text>
                    </View>
                  </View>
                </RadioButton.Group>
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
