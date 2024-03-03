import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgotPasswordScreen, SignInScreen, SignUpScreen} from '../screens';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AuthHelper from '../helpers/AuthHelper';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();

  const [firebaseUser, setFirebaseUser] = useState(null);

  function onAuthStateChanged(user) {
    setFirebaseUser(user);
  }

  useEffect(() => {
    const subscriber = AuthHelper.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const renderAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: 'Forgot My Password',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Group>
    );
  };

  const renderAdminStack = () => {
    return <Stack.Group></Stack.Group>;
  };

  return (
    <Stack.Navigator>
      {false ? renderAdminStack() : renderAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
