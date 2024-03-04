import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import AuthHelper from '../../helpers/AuthHelper';
import {Formik} from 'formik';
import {signUpValidationSchema} from '../../schemas/SignUpSchema';

const SignUpScreen = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Customer',
        value: 'customer',
      },
      {
        id: '2',
        label: 'Devilery',
        value: 'Delivery',
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: '' /*, employeeID: ''*/}}
        validationSchema={signUpValidationSchema}
        onSubmit={values => AuthHelper.signUp(values.email, values.password)}>
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
              {/* {selectedId == 2 && (
                <View>
                  <Text style={styles.textInputTitle}>Enter Employee ID</Text>
                  <TextInput
                    onChangeText={handleChange('employeeID')}
                    onBlur={handleBlur('employeeID')}
                    value={values.employeeID}
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                  />
                  {errors.employeeID && (
                    <Text style={styles.errorText}>{errors.employeeID}</Text>
                  )}
                </View>
              )} */}
            </View>
            <TouchableOpacity
              style={styles.buttonLogin}
              disabled={!isValid}
              onPress={handleSubmit}>
              <Text>Signup</Text>
            </TouchableOpacity>
            <View style={styles.radioButtonStyles}>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;

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
  errorText: {
    fontSize: 10,
    color: 'red',
    marginVertical: 5,
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
  radioButtonStyles: {
    flexDirection: 'row',
  },
});
