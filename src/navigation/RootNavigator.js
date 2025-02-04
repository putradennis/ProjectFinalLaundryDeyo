import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddLaundryScreen from '../screens/AddLaundryScreen';
import EditLaundryScreen from '../screens/UpdateLaundryScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddLaundry" component={AddLaundryScreen} />
        <Stack.Screen name="EditLaundry" component={EditLaundryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
