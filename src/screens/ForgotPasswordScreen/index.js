import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {forgotPasswordSchema} from '../../schemas/ForgotPasswordSchema';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: ''}}
        validationSchema={forgotPasswordSchema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
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
            </View>

            <TouchableOpacity
              style={styles.buttonLogin}
              disabled={!isValid}
              onPress={() => {
                handleSubmit;
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#ff9a00',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
