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
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <Text>Enter Email</Text>
        <TextInput
          value={email}
          style={styles.textInput}
          onChangeText={ct => setEmail(ct)}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          //   onSignupPressed(email, password);
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
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
