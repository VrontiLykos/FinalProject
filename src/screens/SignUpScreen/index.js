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
// import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  // const onSignupPressed = async (email, password) => {
  //   try {
  //     let res = await auth().createUserWithEmailAndPassword(email, password);
  //     alert('User Registered');
  //   } catch (e) {
  //     console.log(e);
  //     alert(e);
  //   }
  // };

  return (
    <View>
      <TextInput
        name="email"
        placeholder="Enter Email"
        style={styles.textInput}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        name="password"
        placeholder="Enter Password"
        style={styles.textInput}
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'pink',
    height: 40,
  },
});
