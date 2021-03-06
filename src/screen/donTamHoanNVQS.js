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
  dc_tp: yup.string().required(),
  dc_quận_huyện: yup.string().required(),
  dc_phường_xã: yup.string().required(),
  địa_chỉ: yup.string().required(),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.number().required().positive().integer(),
  năm: yup.number().required().positive().integer(),
  năm_bắt_đầu: yup.number().required().positive().integer(),
  năm_kết_thúc: yup.number().required().positive().integer(),
  kỷ_luật: yup.string().required(),
});

export default function DonTamHoanNVQS({navigation}) {
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
              form: 'Đơn Tạm hoãn NVQS',
              tên: '',
              ngày_sinh: 'Chọn ngày',
              giới_tính: 'nam',
              dc_tp: '',
              dc_quận_huyện: '',
              dc_phường_xã: '',
              địa_chỉ: '',
              mssv: '',
              lớp: '',
              khoa: '',
              khóa: '',
              năm: '',
              năm_bắt_đầu: '',
              năm_kết_thúc: '',
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

                <Text style={GlobalStyles.subLabel}>Địa chỉ thường trú: </Text>
                {/* Địa chỉ (Thành phố) */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.dc_tp && props.errors.dc_tp
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Tỉnh/ThànhPhố: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Thành phố"
                  onChangeText={props.handleChange('dc_tp')}
                  value={props.values.dc_tp}
                  onBlur={props.handleBlur('dc_tp')}
                />

                {/* địa chỉ (Quận/Huyện) */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.dc_quận_huyện && props.errors.dc_quận_huyện
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Quận/Huyện: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Quận/huyện"
                  onChangeText={props.handleChange('dc_quận_huyện')}
                  value={props.values.dc_quận_huyện}
                  onBlur={props.handleBlur('dc_quận_huyện')}
                />

                {/* địa chỉ (Phường/Xã) */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.dc_phường_xã && props.errors.dc_phường_xã
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Phường/Xã: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Phường/Xã"
                  onChangeText={props.handleChange('dc_phường_xã')}
                  value={props.values.dc_phường_xã}
                  onBlur={props.handleBlur('dc_phường_xã')}
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

                <View style={GlobalStyles.flexDirRow}>
                  {/* Năm bắt đầu */}
                  <View style={[GlobalStyles.flex1, GlobalStyles.MR10]}>
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.năm_bắt_đầu && props.errors.năm_bắt_đầu
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Năm bắt đầu: </Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="20__"
                      onChangeText={props.handleChange('năm_bắt_đầu')}
                      value={props.values.năm_bắt_đầu}
                      onBlur={props.handleBlur('năm_bắt_đầu')}
                      keyboardType={'numeric'}
                      maxLength={4}
                    />
                  </View>
                  {/* Năm kết thúc */}
                  <View style={GlobalStyles.flex1}>
                    <Text style={GlobalStyles.colorCrimson}>
                      {props.touched.năm_kết_thúc && props.errors.năm_kết_thúc
                        ? 'Thông tin không chính xác'
                        : ''}
                    </Text>
                    <Text style={GlobalStyles.label}>Năm kết thúc</Text>
                    <TextInput
                      style={GlobalStyles.input}
                      placeholder="20__"
                      onChangeText={props.handleChange('năm_kết_thúc')}
                      value={props.values.năm_kết_thúc}
                      onBlur={props.handleBlur('năm_kết_thúc')}
                      keyboardType={'numeric'}
                      maxLength={4}
                    />
                  </View>
                </View>
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
