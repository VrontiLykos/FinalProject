import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appOrange} from '../../constants';
import {launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.topHalfView}>
        <TouchableOpacity
          style={[styles.profileImgContainer]}
          onPress={openImagePicker}>
          {selectedImage ? (
            <Image style={styles.profileImg} source={{uri: selectedImage}} />
          ) : (
            <Image
              style={styles.profileImg}
              source={require('../../assets/cameraIcon.png')}
            />
          )}
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.profileInputView}>
        <View style={styles.profileItemView}>
          <TextInput
            placeholder="Joe mama"
            style={styles.profileTextInput}></TextInput>
        </View>
        <View style={styles.profileItemView}>
          <TextInput
            placeholder="Joe mama"
            style={styles.profileTextInput}></TextInput>
        </View>
        <View style={styles.profileItemView}>
          <TextInput
            placeholder="Joe mama"
            style={styles.profileTextInput}></TextInput>
        </View>
        <View style={styles.profileItemView}>
          <TextInput
            placeholder="Joe mama"
            style={styles.profileTextInput}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  topHalfView: {
    backgroundColor: appOrange,
    width: '100%',
    height: '25%',
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 150,
    width: 150,
    borderRadius: 75,
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'purple',
  },
  profileItemView: {
    flexDirection: 'row',
  },
  profileTextInput: {
    backgroundColor: appOrange,
    opacity: 0.5,
    width: '80%',
    marginRight: 10,
    padding: 15,
    borderRadius: 15,
  },
  profileInputView: {
    width: '100%',
    height: '60%',
    marginTop: 80,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
