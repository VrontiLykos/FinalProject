import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import AuthHelper from '../../helpers/AuthHelper';

const SignUpScreen = () => {
  const onSignupPressed = async (email, password) => {
    AuthHelper.signUp(email, password);
  };

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

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [id, setID] = useState();
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <Text>Enter Email</Text>
        <TextInput
          name="email"
          style={styles.textInput}
          onChangeText={newText => setEmail(newText)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text>Enter Password</Text>
        <TextInput
          name="password"
          style={styles.textInput}
          onChangeText={newText => setPassword(newText)}
          autoCapitalize="none"
        />
        {selectedId == 2 && (
          <View>
            <Text>Enter Employee ID</Text>
            <TextInput
              name="ID"
              style={styles.textInput}
              onChangeText={newText => setID(newText)}
              autoCapitalize="none"
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          onSignupPressed(email, password);
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
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
