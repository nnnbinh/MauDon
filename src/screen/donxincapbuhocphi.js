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
import SendData from '../sendData';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReviewSchema = yup.object({
  tên: yup.string().required(),
  ngày_sinh: yup.mixed().notOneOf(['Chọn ngày']),
  nơi_sinh: yup.string().required(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.number().required().positive().integer(),
  ten_ba_mẹ: yup.string().required(),
  hộ_khẩu: yup.string().required(),
  dc_tp: yup.string().required(),
  dc_quận_huyện: yup.string().required(),
  dc_phường_xã: yup.string().required(),
  Thuộc_đối_tượng: yup.string().required(),
});

export default function DonXinCapBuHocPhi({navigation}) {
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
              form: 'đơn xin cấp bù học phí',
              tên: '',
              ngày_sinh: 'Chọn ngày',
              nơi_sinh: '',
              lớp: '',
              khoa: '',
              khóa: '',
              ten_ba_mẹ: '',
              hộ_khẩu: '',
              dc_tp: '',
              dc_quận_huyện: '',
              dc_phường_xã: '',
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

                {/* Họ tên cha/mẹ học sinh, sinh viên:  */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.ten_ba_mẹ && props.errors.ten_ba_mẹ
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Họ tên cha/mẹ học sinh, sinh viên:{' '}
                </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Họ tên cha/mẹ học sinh, sinh viên:"
                  onChangeText={props.handleChange('ten_ba_mẹ')}
                  value={props.values.ten_ba_mẹ}
                  onBlur={props.handleBlur('ten_ba_mẹ')}
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
