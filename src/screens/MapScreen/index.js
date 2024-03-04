import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
