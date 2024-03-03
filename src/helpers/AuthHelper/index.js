import auth from '@react-native-firebase/auth';

class AuthHelper {
  onAuthStateChanged = callback => {
    auth().onAuthStateChanged(user => {
      callback(user);
    });
  };

  signIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('User Logged In');
      })
      .catch(err => {
        alert(err.message);
      });
  };

  signUp = async (email, password) => {
    try {
      let res = await auth().createUserWithEmailAndPassword(email, password);
      alert('User Registered');
    } catch (e) {
      console.log(e);
      alert(e + email + password);
    }
  };

  signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
}

export default new AuthHelper();
