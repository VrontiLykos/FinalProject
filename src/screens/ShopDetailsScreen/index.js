import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';

const ShopDetailsScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text>item: {JSON.stringify(item)}</Text>
    </View>
  );
};

export default ShopDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
