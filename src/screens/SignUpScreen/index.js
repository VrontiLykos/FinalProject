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
import auth from '@react-native-firebase/auth';
import RadioGroup from 'react-native-radio-buttons-group';

const SignUpScreen = () => {
  const onSignupPressed = async (email, password) => {
    try {
      let res = await auth().createUserWithEmailAndPassword(email, password);
      alert('User Registered');
    } catch (e) {
      console.log(e);
      alert(e + email + password);
    }
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
  const [selectedId, setSelectedId] = useState();

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          name="email"
          placeholder="Enter Email"
          style={styles.textInput}
          onChangeText={newText => setEmail(newText)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          name="password"
          placeholder="Enter Password"
          style={styles.textInput}
          onChangeText={newText => setPassword(newText)}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}
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
    justifyContent: 'space-evenly',
  },
  textInput: {
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
  },
});
