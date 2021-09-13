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
import {GlobalStyles} from '../styles/global';
import {Picker} from '@react-native-picker/picker';
import SendData from '../sendData';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReviewSchema = yup.object({
  tên: yup.string().required(),
  ngày_sinh: yup.mixed().notOneOf(['Chọn ngày']),
  nơi_sinh: yup.string().required(),
  hộ_khẩu: yup.string().required(),
  chổ_ở: yup.string().required(),
  Loại_hinh_đào_tạo: yup.string().required(),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  Ngày_tốt_ngiệp: yup.mixed().notOneOf(['Chọn ngày']),
  Thời_gian_khóa_hoc: yup.string().required(),
  các_môn_nợ: yup.string().required(),
  lý_do: yup.string().required(),
});

export default function DonXacNhanNoMon({navigation}) {
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
              form: 'đơn xác nhận nợ môn',
              tên: '',
              ngày_sinh: 'Chọn ngày',
              nơi_sinh: '',
              lớp: '',
              mssv: '',
              khoa: '',
              hộ_khẩu: '',
              chổ_ở: '',
              hệ: 'CĐ Chính Quy',
              Loại_hinh_đào_tạo: '',
              Thời_gian_khóa_hoc: '',
              Ngày_tốt_ngiệp: 'Chọn ngày',
              các_môn_nợ: '',
              lý_do: '',
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

                {/* Nơi sinh */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.nơi_sinh && props.errors.nơi_sinh
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Nơi sinh: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Nơi sinh"
                  onChangeText={props.handleChange('nơi_sinh')}
                  onBlur={props.handleBlur('nơi_sinh')}
                  value={props.values.nơi_sinh}
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

                {/* Chỗ ở hiện nay (ghi đầy đủ) */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.chổ_ở && props.errors.chổ_ở
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Chỗ ở hiện nay (ghi đầy đủ):
                </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Chỗ ở hiện nay (ghi đầy đủ)"
                  onChangeText={props.handleChange('chổ_ở')}
                  value={props.values.chổ_ở}
                  onBlur={props.handleBlur('chổ_ở')}
                />
                {/* Hệ đào tạo (Cao đẳng/CĐN/TCCN): */}
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
                  {props.touched.Loại_hinh_đào_tạo &&
                  props.errors.Loại_hinh_đào_tạo
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Loại hình đào tạo: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Loại hình đào tạo"
                  onChangeText={props.handleChange('Loại_hinh_đào_tạo')}
                  value={props.values.Loại_hinh_đào_tạo}
                  onBlur={props.handleBlur('Loại_hinh_đào_tạo')}
                />
                {/* Thời gian khóa học : */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Thời_gian_khóa_hoc &&
                  props.errors.Thời_gian_khóa_hoc
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Thời gian khóa học: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Thời gian khóa học"
                  onChangeText={props.handleChange('Thời_gian_khóa_hoc')}
                  value={props.values.Thời_gian_khóa_hoc}
                  onBlur={props.handleBlur('Thời_gian_khóa_hoc')}
                />
                {/* Nếu theo kịp tiến độ đào tạo tôi đã tốt nghiệp vào: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Ngày_tốt_ngiệp && props.errors.Ngày_tốt_ngiệp
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Nếu theo kịp tiến độ đào tạo tôi đã tốt nghiệp vào:{' '}
                </Text>
                <TouchableOpacity
                  onPress={showDatePicker2}
                  onBlur={props.handleBlur('Ngày_tốt_ngiệp')}>
                  <View style={GlobalStyles.dateInput}>
                    <Text style={GlobalStyles.font15}>
                      {props.values.Ngày_tốt_ngiệp}
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
                        props.setFieldValue('Ngày_tốt_ngiệp', res);
                      }}
                      onCancel={hideDatePicker2}
                    />
                  </View>
                </TouchableOpacity>
                {/* Các môn còn nợ: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.các_môn_nợ && props.errors.các_môn_nợ
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Các môn còn nợ: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  multiline={true}
                  placeholder="Các môn còn nợ"
                  onChangeText={props.handleChange('các_môn_nợ')}
                  value={props.values.các_môn_nợ}
                  onBlur={props.handleBlur('các_môn_nợ')}
                />
                {/* Lý do: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.lý_do && props.errors.lý_do
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Lý do: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  multiline={true}
                  placeholder="Lý do"
                  onChangeText={props.handleChange('lý_do')}
                  value={props.values.lý_do}
                  onBlur={props.handleBlur('lý_do')}
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
