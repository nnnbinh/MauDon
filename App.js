// In App.js in a new project

import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import dsMauDon from './src/screen/dsMaudon';
import DonTamHoanNVQS from './src/screen/donTamHoanNVQS';
import DkThanhCong from './src/screen/dkThanhCong';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#F47828'},
          headerTintColor: 'white',
          headerTitleStyle: {
            width: 50,
          },
        }}>
        <Stack.Screen name="Mẫu đơn" component={dsMauDon} />
        <Stack.Screen
          name="Don 1"
          component={DonTamHoanNVQS}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen name="Dk thanh cong" component={DkThanhCong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
