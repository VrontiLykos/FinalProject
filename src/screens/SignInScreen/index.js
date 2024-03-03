import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AuthHelper from '../../helpers/AuthHelper';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../schemas/LoginSchema';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginValidationSchema}
        onSubmit={values => AuthHelper.signIn(values.email, values.password)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <Image
              style={styles.appImage}
              source={require('../../assets/cartIcon.png')}
            />
            <View style={styles.textInputView}>
              <Text style={styles.textInputTitle}>Enter Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                style={styles.textInput}
                autoCapitalize="none"
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={styles.textInputTitle}>Enter Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Forgot');
                }}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.buttonLogin}
              disabled={!isValid}
              onPress={() => {
                handleSubmit;
              }}>
              <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignInScreen;

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
  textInputTitle: {
    marginTop: 10,
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
    padding: 5,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
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
  forgotPasswordText: {
    marginTop: 5,
    fontSize: 10,
    color: 'blue',
  },
  signUpText: {
    color: 'blue',
  },
});
