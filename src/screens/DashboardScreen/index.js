import {StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MapScreen, ProfileScreen, StoreScreen} from '../index';
import {appOrange} from '../../constants';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: appOrange,
        tabBarActiveBackgroundColor: appOrange,
      })}>
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarIcon: ({focused}) => {
            let iconName;
            iconName = focused
              ? require('../../assets/selectedStoreIcon.png')
              : require('../../assets/storeIcon.png');
            return <Image style={styles.appImage} source={iconName} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => {
            let iconName;
            iconName = focused
              ? require('../../assets/selectedMapIcon.png')
              : require('../../assets/mapIcon.png');
            return <Image style={styles.appImage} source={iconName} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            let iconName;
            iconName = focused
              ? require('../../assets/selectedProfileIcon.png')
              : require('../../assets/profileIcon.png');
            return <Image style={styles.appImage} source={iconName} />;
          },
          headerShown: false,
        }}
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
  appImage: {
    flex: 0.8,
    resizeMode: 'center',
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
    backgroundColor: appOrange,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
