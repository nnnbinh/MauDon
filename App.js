// In App.js in a new project

import * as React from 'react';
import {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import dsMauDon from './src/screen/dsMaudon';
import DonCuaToi from './src/screen/donCuaToi';
import DonTamHoanNVQS from './src/screen/donTamHoanNVQS';
import GxnSinhVien from './src/screen/gxnSinhVien';
import DkThanhCong from './src/screen/dkThanhCong';
import DonGiahanHP from './src/screen/donGiaHanHP';
import DonXNDongHP from './src/screen/donXNDongHp';
import DonDkHocThiLai from './src/screen/donDkHocThiLai';
import DonCamKetTraNoHP from './src/screen/doncamkettranohocphi';
import DonXinVayVonNHCS from './src/screen/donxinvayvonnganhangchinhsach';
import DonXacNhanNoMon from './src/screen/donxacnhannomon';
import DonXinCapBuHocPhi from './src/screen/donxincapbuhocphi';
import GiayXacNhanMienGiamHPNDH from './src/screen/giayxacnhanmiengiamhocphiNDH';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Danh sách" component={dsMauDon} />
      <Tab.Screen name="Đơn của tôi" component={DonCuaToi} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#F47828'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Mẫu đơn" component={Home} />
        <Stack.Screen
          name="Don 1"
          component={DonTamHoanNVQS}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 2"
          component={GxnSinhVien}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 3"
          component={DonGiahanHP}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 4"
          component={DonXNDongHP}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 5"
          component={DonDkHocThiLai}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 6"
          component={DonXacNhanNoMon}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 7"
          component={DonXinVayVonNHCS}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 8"
          component={DonCamKetTraNoHP}
          options={({route}) => ({title: route.params.name})}
        />

        <Stack.Screen
          name="Don 9"
          component={DonXinCapBuHocPhi}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Don 10"
          component={GiayXacNhanMienGiamHPNDH}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen name="Dk thanh cong" component={DkThanhCong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
