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
  ngày_sinh: yup.mixed().notOneOf(['Chọn ngày']),
  CMND: yup.number().required().positive().integer(),
  ngày_cấp: yup.mixed().notOneOf(['Chọn ngày']),
  nơi_cấp: yup.string().required(),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.number().required().positive().integer(),
  Loại_hình_đào_tạo: yup.string().required(),
  Ngày_nhập_học: yup.mixed().notOneOf(['Chọn ngày']),
  Thời_gian_ra_trường: yup.mixed().notOneOf(['Chọn ngày']),
  ten_đứng_ra_vay_vốn: yup.string().required(),
  dc_tp: yup.string().required(),
  dc_quận_huyện: yup.string().required(),
  dc_phường_xã: yup.string().required(),
  Số_tiền_vay: yup.number().required().positive().integer(),
  Số_tiền_vay_bằng_chữ: yup.string().required(),
  Thuộc_đối_tượng: yup.string().required(),
});

export default function DonCamKetTraNoHP({navigation}) {
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

  const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);
  const showDatePicker3 = () => {
    setDatePickerVisibility3(true);
  };
  const hideDatePicker3 = () => {
    setDatePickerVisibility3(false);
  };

  const [isDatePickerVisible4, setDatePickerVisibility4] = useState(false);
  const showDatePicker4 = () => {
    setDatePickerVisibility4(true);
  };
  const hideDatePicker4 = () => {
    setDatePickerVisibility4(false);
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
              giới_tính: 'nam',
              CMND: '',
              ngày_cấp: 'Chọn ngày',
              nơi_cấp: '',
              dc_tp: '',
              dc_quận_huyện: '',
              dc_phường_xã: '',
              Loại_hình_đào_tạo: '',
              mssv: '',
              lớp: '',
              khoa: '',
              khóa: '',
              Ngày_nhập_học: 'Chọn ngày',
              Thời_gian_ra_trường: 'Chọn ngày',
              ten_đứng_ra_vay_vốn: '',
              Số_tiền_vay: '',
              Số_tiền_vay_bằng_chữ: '',
              Thuộc_đối_tượng: '',
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

                {/*CMND */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.CMND && props.errors.CMND
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>CMND: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="CMND"
                  onChangeText={props.handleChange('CMND')}
                  value={props.values.CMND}
                  onBlur={props.handleBlur('CMND')}
                  keyboardType={'numeric'}
                />
                {/*Ngày Cấp */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.ngày_cấp && props.errors.ngày_cấp
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Ngày Cấp: </Text>
                <TouchableOpacity
                  onPress={showDatePicker2}
                  onBlur={props.handleBlur('ngày_cấp')}>
                  <View style={GlobalStyles.dateInput}>
                    <Text style={GlobalStyles.font15}>
                      {props.values.ngày_cấp}
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
                        props.setFieldValue('ngày_cấp', res);
                      }}
                      onCancel={hideDatePicker2}
                    />
                  </View>
                </TouchableOpacity>
                {/*Nơi Cấp */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.nơi_cấp && props.errors.nơi_cấp
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Nơi Cấp: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Nơi Cấp"
                  onChangeText={props.handleChange('nơi_cấp')}
                  value={props.values.nơi_cấp}
                  onBlur={props.handleBlur('nơi_cấp')}
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

                {/* Khóa */}
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

                {/* Ngày Nhập học */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Ngày_nhập_học && props.errors.Ngày_nhập_học
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Ngày nhập học: </Text>
                <TouchableOpacity
                  onPress={showDatePicker3}
                  onBlur={props.handleBlur('Ngày_nhập_học')}>
                  <View style={GlobalStyles.dateInput}>
                    <Text style={GlobalStyles.font15}>
                      {props.values.Ngày_nhập_học}
                    </Text>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible3}
                      mode="date"
                      onConfirm={date => {
                        const res =
                          date.getDate() +
                          '/' +
                          date.getMonth() +
                          '/' +
                          date.getFullYear();
                        props.setFieldValue('Ngày_nhập_học', res);
                      }}
                      onCancel={hideDatePicker3}
                    />
                  </View>
                </TouchableOpacity>

                {/* Thời gian ra trường */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Thời_gian_ra_trường &&
                  props.errors.Thời_gian_ra_trường
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Ngày ra trường (dự kiến):{' '}
                </Text>
                <TouchableOpacity
                  onPress={showDatePicker4}
                  onBlur={props.handleBlur('Thời_gian_ra_trường')}>
                  <View style={GlobalStyles.dateInput}>
                    <Text style={GlobalStyles.font15}>
                      {props.values.Thời_gian_ra_trường}
                    </Text>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible4}
                      mode="date"
                      onConfirm={date => {
                        const res =
                          date.getDate() +
                          '/' +
                          date.getMonth() +
                          '/' +
                          date.getFullYear();
                        props.setFieldValue('Thời_gian_ra_trường', res);
                      }}
                      onCancel={hideDatePicker4}
                    />
                  </View>
                </TouchableOpacity>

                {/*Họ và tên người đứng tên vay vốn: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.ten_đứng_ra_vay_vốn &&
                  props.errors.ten_đứng_ra_vay_vốn
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Họ và tên người đứng tên vay vốn:{' '}
                </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Họ và tên người đứng tên vay vốn"
                  onChangeText={props.handleChange('ten_đứng_ra_vay_vốn')}
                  value={props.values.ten_đứng_ra_vay_vốn}
                  onBlur={props.handleBlur('ten_đứng_ra_vay_vốn')}
                />

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

                {/*Thuộc đối tượng: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Thuộc_đối_tượng && props.errors.Thuộc_đối_tượng
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Thuộc đối tượng: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Thuộc đối tượng"
                  onChangeText={props.handleChange('Thuộc_đối_tượng')}
                  value={props.values.Thuộc_đối_tượng}
                  onBlur={props.handleBlur('Thuộc_đối_tượng')}
                />

                {/*Số Tiền Vay: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Số_tiền_vay && props.errors.Số_tiền_vay
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Số tiền vay:</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Số tiền vay:"
                  onChangeText={props.handleChange('Số_tiền_vay')}
                  value={props.values.Số_tiền_vay}
                  onBlur={props.handleBlur('Số_tiền_vay')}
                  keyboardType={'numeric'}
                />

                {/*Số tiền vay bằng chữ*/}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Số_tiền_vay_bằng_chữ &&
                  props.errors.Số_tiền_vay_bằng_chữ
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Số tiền vay (bằng chữ):</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Số tiền vay (bằng chữ)"
                  onChangeText={props.handleChange('Số_tiền_vay_bằng_chữ')}
                  value={props.values.Số_tiền_vay_bằng_chữ}
                  onBlur={props.handleBlur('Số_tiền_vay_bằng_chữ')}
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
