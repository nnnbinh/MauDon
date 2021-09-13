import React from 'react';
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
const ReviewSchema = yup.object({
  tên: yup.string().required(),
  mssv: yup.number().required().positive().integer(),
  lớp: yup.string().required(),
  khoa: yup.string().required(),
  năm_học: yup.string().required(),
  số_tiền: yup.number().required().positive().integer(),
  số_tiền_chữ: yup.string().required(),
});

export default function DonXNDongHP({navigation}) {
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
              mssv: '',
              lớp: '',
              khoa: '',
              cơ_sở: 'CVPM Quang Trung',
              năm_học: '',
              học_kỳ: '1',
              số_tiền: '',
              số_tiền_chữ: '',
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

                {/* Cơ sở */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.cơ_sở && props.errors.cơ_sở
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Cơ sở: </Text>
                <View style={GlobalStyles.picker}>
                  <Picker
                    selectedValue={props.values.cơ_sở}
                    onValueChange={props.handleChange('cơ_sở')}>
                    <Picker.Item
                      label="CVPM Quang Trung"
                      value={'CVPM Quang Trung'}
                    />
                    {/* <Picker.Item label="CĐ Nghề" value={'CĐ Nghề'} />
                    <Picker.Item
                      label="Trung Cấp Chuyên Nghiệp"
                      value={'Trung Cấp Chuyên Nghiệp'}
                    /> */}
                  </Picker>
                </View>

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
                      keyboardType="numeric"
                      value={props.values.năm_học}
                      onBlur={props.handleBlur('năm_học')}
                    />
                  </View>
                </View>

                {/* Số tiền */}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.số_tiền && props.errors.số_tiền
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Số tiền: </Text>
                <TextInput
                  keyboardType="numeric"
                  style={GlobalStyles.input}
                  placeholder="1500000"
                  onChangeText={props.handleChange('số_tiền')}
                  onBlur={props.handleBlur('số_tiền')}
                  value={props.values.số_tiền}
                />

                {/* Số tiền bằng chữ*/}
                <Text style={GlobalStyles.colorCrimson}>
                  {props.touched.số_tiền_chữ && props.errors.số_tiền_chữ
                    ? 'Thông tin không chính xác'
                    : ''}
                </Text>
                <Text style={GlobalStyles.label}>Số tiền(bằng chữ): </Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Một triệu năm trăm ngàn"
                  onChangeText={props.handleChange('số_tiền_chữ')}
                  onBlur={props.handleBlur('số_tiền_chữ')}
                  value={props.values.số_tiền_chữ}
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
