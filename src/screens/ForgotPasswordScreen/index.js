import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const ForgotPasswordScreen = () => {
  return (
    <View>
      <TextInput
        placeholder="Enter Email"
        style={styles.textInput}
        autoCapitalize="none"
      />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'pink',
    height: 40,
    margin: 5,
    padding: 5,
  },
});
