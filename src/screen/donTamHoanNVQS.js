import React from 'react';
import {
  View,
  StyleSheet,
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

const ReviewSchema = yup.object({
  tên: yup.string().required(),
  ngày_sinh: yup.string().required(),
  dc_tp: yup.string().required(),
  dc_quận_huyện: yup.string().required(),
  dc_phường_xã: yup.string().required(),
  địa_chỉ: yup.string().required(),
  mssv: yup.string().required(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  khóa: yup.string().required(),
  năm: yup.string().required(),
  năm_bắt_đầu: yup.string().required(),
  năm_kết_thúc: yup.string().required(),
  kỷ_luật: yup.string().required(),
});
function sample(token2) {
  console.log(token2);
  console.log(typeof token2);
  //   if (token2 === -1) {
  //     Alert.alert('chua nhap token');
  //     return;
  //   }
  fetch('http://185.70.198.139:4000/send_mail/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: token2,
    }),
  })
    .then(response => response.text())
    .then(responseData => {
      console.log(responseData);
    })
    .done();
}

export default function DonTamHoanNVQS({navigation}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView>
        <View style={styles.containers}>
          <Formik
            enableReinitialize={true}
            validationSchema={ReviewSchema}
            initialValues={{
              tên: '',
              ngày_sinh: '',
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
              sample(val);
              actions.resetForm();
              navigation.navigate('Dk thanh cong');
            }}>
            {props => (
              <View>
                {/* tên */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.tên && props.errors.tên
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Họ và tên: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Họ tên"
                  onChangeText={props.handleChange('tên')}
                  onBlur={props.handleBlur('tên')}
                  value={props.values.tên}
                />
                {/* ngày sinh */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.ngày_sinh && props.errors.ngày_sinh
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Ngày sinh: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="ngày sinh"
                  onChangeText={props.handleChange('ngày_sinh')}
                  onBlur={props.handleBlur('ngày_sinh')}
                  value={props.values.ngày_sinh}
                />

                {/* giới tính */}
                <Text style={styles.font20}>Giới tính: </Text>
                <View style={styles.picker}>
                  <Picker
                    selectedValue={props.values.giới_tính}
                    onValueChange={props.handleChange('giới_tính')}>
                    <Picker.Item label="Nam" value={'Nam'} />
                    <Picker.Item label="Nữ" value={'Nữ'} />
                  </Picker>
                </View>
                <Text style={styles.subLabel}>Địa chỉ thường trú: </Text>
                {/* Địa chỉ (Thành phố) */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.dc_tp && props.errors.dc_tp
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Tỉnh/ThànhPhố: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Thành phố"
                  onChangeText={props.handleChange('dc_tp')}
                  value={props.values.dc_tp}
                  onBlur={props.handleBlur('dc_tp')}
                />

                {/* địa chỉ (Quận/Huyện) */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.dc_quận_huyện && props.errors.dc_quận_huyện
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Quận/Huyện: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Quận/huyện"
                  onChangeText={props.handleChange('dc_quận_huyện')}
                  value={props.values.dc_quận_huyện}
                  onBlur={props.handleBlur('dc_quận_huyện')}
                />

                {/* địa chỉ (Phường/Xã) */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.dc_phường_xã && props.errors.dc_phường_xã
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Phường/Xã: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Phường/Xã"
                  onChangeText={props.handleChange('dc_phường_xã')}
                  value={props.values.dc_phường_xã}
                  onBlur={props.handleBlur('dc_phường_xã')}
                />

                {/* địa chỉ */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.địa_chỉ && props.errors.địa_chỉ
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Địa chỉ: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Địa chỉ"
                  onChangeText={props.handleChange('địa_chỉ')}
                  value={props.values.địa_chỉ}
                  onBlur={props.handleBlur('địa_chỉ')}
                />

                {/* MSSV */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.mssv && props.errors.mssv
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>MSSV: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="mssv"
                  onChangeText={props.handleChange('mssv')}
                  value={props.values.mssv}
                  onBlur={props.handleBlur('mssv')}
                />

                {/* lớp */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.lớp && props.errors.lớp
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Lớp: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="lớp"
                  onChangeText={props.handleChange('lớp')}
                  value={props.values.lớp}
                  onBlur={props.handleBlur('lớp')}
                />

                {/* Khoa */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.khoa && props.errors.khoa
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Khoa: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="khoa"
                  onChangeText={props.handleChange('khoa')}
                  value={props.values.khoa}
                  onBlur={props.handleBlur('khoa')}
                />

                {/* Khóa */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.khóa && props.errors.khóa
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Khóa: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="khóa"
                  onChangeText={props.handleChange('khóa')}
                  value={props.values.khóa}
                  onBlur={props.handleBlur('khóa')}
                />

                {/* Năm thứ */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.năm && props.errors.năm
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Năm thứ: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="năm"
                  onChangeText={props.handleChange('năm')}
                  value={props.values.năm}
                  onBlur={props.handleBlur('năm')}
                />

                {/* Năm bắt đầu */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.năm_bắt_đầu && props.errors.năm_bắt_đầu
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Năm bắt đầu: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="năm_bắt_đầu"
                  onChangeText={props.handleChange('năm_bắt_đầu')}
                  value={props.values.năm_bắt_đầu}
                  onBlur={props.handleBlur('năm_bắt_đầu')}
                />

                {/* Năm kết thúc */}
                <Text style={{color: 'crimson'}}>
                  {props.touched.năm_kết_thúc && props.errors.năm_kết_thúc
                    ? 'Không được để trống'
                    : ''}
                </Text>
                <Text style={styles.font20}>Năm kết thúc (dự kiến): </Text>
                <TextInput
                  style={styles.input}
                  placeholder="năm_kết_thúc"
                  onChangeText={props.handleChange('năm_kết_thúc')}
                  value={props.values.năm_kết_thúc}
                  onBlur={props.handleBlur('năm_kết_thúc')}
                />

                {/* bị kỷ luật? */}
                <Text style={styles.font20}>
                  Có bị cảnh cáo từ hình thức kỷ luật không?:
                </Text>
                <RadioButton.Group
                  onValueChange={props.handleChange('kỷ_luật')}
                  value={props.values.kỷ_luật}>
                  <View style={[styles.radio, styles.flexDirRow]}>
                    <View style={styles.flexDirRow}>
                      <Text style={styles.font22}>Có</Text>
                      <RadioButton value="Có" />
                    </View>
                    <View style={styles.flexDirRow}>
                      <Text style={styles.font22}>Không</Text>
                      <RadioButton value="Không" />
                    </View>
                  </View>
                </RadioButton.Group>
                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={styles.roundButton1}>
                  <Text style={[styles.textWhite, styles.font20]}>Nộp đơn</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: 10,
    marginHorizontal: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  font20: {
    fontSize: 20,
  },
  subLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  picker: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  radio: {
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  flexDirRow: {
    flexDirection: 'row',
  },
  font22: {
    fontSize: 22,
  },
  roundButton1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#289EF4',
    marginHorizontal: 50,
    marginBottom: 10,
  },
  textWhite: {
    color: 'white',
  },
});
