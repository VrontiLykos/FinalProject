import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../screens';
import {useNavigation} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  //   const user = useSelector(state => state.user);
  //   const dispatch = useDispatch();
  //   const navigation = useNavigation();
  //
  //   const [firebaseUser, setFirebaseUser] = useState(null);
  //
  //   function onAuthStateChanged(user) {
  //     console.log(user);
  //     setFirebaseUser(user);
  //   }

  //   const onFirebaseSignedOut = () => {
  //     auth()
  //       .signOut()
  //       .then(() => console.log('User signed out!'));
  //   };

  //   useEffect(() => {
  //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //     return subscriber;
  //   }, []);

  const renderAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
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
