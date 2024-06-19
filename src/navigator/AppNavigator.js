import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddLaundryScreen from '../screens/AddLaundryScreen';
import UpdateLaundryScreen from '../screens/UpdateLaundryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name={"Home"} component={HomeScreen} />
    <Stack.Screen name={"AddLaundry"} component={AddLaundryScreen} />
    <Stack.Screen name={"UpdateLaundry"} component={UpdateLaundryScreen} />
  </Stack.Navigator>
);

export default AppNavigator;

//// navigator/AppNavigator.js
//
//import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import LaundryForm from '../components/LaundryForm';
//import LaundryList from '../components/LaundryList';
//
//const Stack = createStackNavigator();
//
//const AppNavigator = () => {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="LaundryForm">
//        <Stack.Screen name="LaundryForm" component={LaundryForm} options={{ title: 'Tambah Pesanan' }} />
//        <Stack.Screen name="LaundryList" component={LaundryList} options={{ title: 'Daftar Pesanan' }} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//};
//
//export default AppNavigator;
