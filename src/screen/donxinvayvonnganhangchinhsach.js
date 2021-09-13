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
  CMND: yup.number().required().positive().integer(),
  ngày_cấp: yup.mixed().notOneOf(['Chọn ngày']),
  nơi_cấp: yup.string().required(),
  Mã_trường: yup.string().required(),
  Tên_Trường: yup.string().required(),
  Nganh_học: yup.string().required(),
  hệ: yup.string().required(),
  Loại_hình_đào_tạo: yup.string().required(),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.number().required().positive().integer(),
  Ngày_nhập_học: yup.mixed().notOneOf(['Chọn ngày']),
  Thời_gian_ra_trường: yup.mixed().notOneOf(['Chọn ngày']),
  Số_tiền_học_phí: yup.number().required().positive().integer(),
  Thuộc_diện: yup.string().required(),
  Thuộc_đối_tượng: yup.string().required(),
});

export default function DonXinVayVonNHCS({navigation}) {
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
              form: 'đơn xin vay vốn ngân hàng chính sách',
              tên: '',
              ngày_sinh: 'Chọn ngày',
              giới_tính: 'nam',
              CMND: '',
              ngày_cấp: 'Chọn ngày',
              nơi_cấp: '',
              Mã_trường: 'CDD0223',
              Tên_Trường: 'Cao đẳng Viễn Đông',
              Nganh_học: '',
              hệ: 'CĐ Chính Quy',
              Loại_hình_đào_tạo: '',
              mssv: '',
              lớp: '',
              khoa: '',
              khóa: '',
              Ngày_nhập_học: 'Chọn ngày',
              Thời_gian_ra_trường: 'Chọn ngày',
              Số_tiền_học_phí: '',
              Thuộc_diện: 'Không miễn giảm',
              Thuộc_đối_tượng: 'Không mồ côi',
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

                {/* giới tính */}
                <Text style={GlobalStyles.label}>Giới Tính:</Text>
                <View style={GlobalStyles.picker}>
                  <Picker
                    selectedValue={props.values.giới_tính}
                    onValueChange={props.handleChange('giới_tính')}>
                    <Picker.Item label="Nam" value={'Nam'} />
                    <Picker.Item label="Nữ" value={'Nữ'} />
                  </Picker>
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
                {/*Mã trường theo học (mã quy ước trong tuyển sinh): */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Mã_trường && props.errors.Mã_trường
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Mã trường theo học (mã quy ước trong tuyển sinh):
                </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="CDD0223"
                  onChangeText={props.handleChange('Mã_trường')}
                  value={props.values.Mã_trường}
                  onBlur={props.handleBlur('Mã_trường')}
                />
                {/*Tên trường: */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Tên_Trường && props.errors.Tên_Trường
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Tên trường: </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Cao đẳng Viễn Đông"
                  onChangeText={props.handleChange('Tên_Trường')}
                  value={props.values.Tên_Trường}
                  onBlur={props.handleBlur('Tên_Trường')}
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
                <Text style={GlobalStyles.label}>Thời gian ra trường: </Text>
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

                {/* Số tiền học phí / học kì (đồng): */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.Số_tiền_học_phí && props.errors.Số_tiền_học_phí
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>
                  Số tiền học phí / học kì (đồng):{' '}
                </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Số tiền học phí / học kì (đồng)"
                  onChangeText={props.handleChange('Số_tiền_học_phí')}
                  value={props.values.Số_tiền_học_phí}
                  onBlur={props.handleBlur('Số_tiền_học_phí')}
                  keyboardType={'numeric'}
                />

                {/* Thuộc diện */}
                <Text style={GlobalStyles.label}>Thuộc diện:</Text>
                <RadioButton.Group
                  onValueChange={props.handleChange('Thuộc_diện')}
                  value={props.values.Thuộc_diện}>
                  <View style={[GlobalStyles.radio2]}>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Không miễn giảm" />
                      <Text style={GlobalStyles.font22}>Không miễn giảm </Text>
                    </View>

                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Giảm học phí" />
                      <Text style={GlobalStyles.font22}>Giảm học phí</Text>
                    </View>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Miễn học phí" />
                      <Text style={GlobalStyles.font22}>Miễn học phí </Text>
                    </View>
                  </View>
                </RadioButton.Group>

                {/* Thuộc đối tượng  */}
                <Text style={GlobalStyles.label}>Thuộc đối tượng :</Text>
                <RadioButton.Group
                  onValueChange={props.handleChange('Thuộc_đối_tượng')}
                  value={props.values.Thuộc_đối_tượng}>
                  <View style={[GlobalStyles.radio, GlobalStyles.flexDirRow]}>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Mồ côi" />
                      <Text style={GlobalStyles.font22}>Mồ côi</Text>
                    </View>
                    <View style={GlobalStyles.flexDirRow}>
                      <RadioButton value="Không mồ côi" />
                      <Text style={GlobalStyles.font22}>Không mồ côi</Text>
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
