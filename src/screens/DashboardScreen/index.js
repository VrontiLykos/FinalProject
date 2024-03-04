import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen, StoreScreen} from '../index';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputView: {
    padding: 15,
    justifyContent: 'space-evenly',
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
  },
  buttonLogin: {
    width: '80%',
    backgroundColor: 'orange',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
