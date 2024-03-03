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

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.appImage}
        source={require('../../assets/cartIcon.png')}
      />
      <View style={styles.textInputView}>
        <Text>Enter Email</Text>
        <TextInput
          value={email}
          onChangeText={ct => {
            setEmail(ct);
          }}
          style={styles.textInput}
          autoCapitalize="none"
        />
        <Text>Enter Password</Text>
        <TextInput
          value={password}
          onChangeText={ct => {
            setPassword(ct);
          }}
          style={styles.textInput}
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Forgot');
          }}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          AuthHelper.signIn(email, password);
        }}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text>Don't have an account?</Text>
      </TouchableOpacity>
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
    flex: 0.7,
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
    backgroundColor: 'orange',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 10,
    color: 'blue',
  },
});
