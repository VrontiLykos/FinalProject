import {StyleSheet, Button, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DashboardScreen,
  ForgotPasswordScreen,
  ShopDetailsScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AuthHelper from '../helpers/AuthHelper';
import {appOrange} from '../constants';

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
            headerTitleStyle: {color: 'black'},
            headerTintColor: appOrange,
          }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: 'Forgot My Password',
            headerTitleStyle: {color: 'black'},
            headerTintColor: appOrange,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Group>
    );
  };

  const renderAdminStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Shop App"
          component={DashboardScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => {
                  AuthHelper.signOut();
                }}
                title="Logout"
                color="red"
              />
            ),
          }}
        />
        <Stack.Screen name="Shop Details" component={ShopDetailsScreen} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {firebaseUser ? renderAdminStack() : renderAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
