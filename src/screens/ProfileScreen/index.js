import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {appOrange} from '../../constants';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalfView}></View>
      <View style={styles.bottomHalfView}></View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  topHalfView: {
    backgroundColor: appOrange,
  },
  bottomHalfView: {
    backgroundColor: 'white',
  },
});
