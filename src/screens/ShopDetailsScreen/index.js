import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import {appOrange} from '../../constants';

const ShopDetailsScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.topHalfView}>
        <Text>Item Image Here</Text>
      </ImageBackground>
      <View style={styles.itemDetailsView}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <View>
          <Text style={styles.itemTitle}>Product Details</Text>
          <Text>{item.details}</Text>
        </View>
        <Text style={styles.itemTitle}>Price History</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text>Add To Cart</Text>
        </TouchableOpacity>
        <Text style={styles.itemTitle}>Comments</Text>
      </View>
    </View>
  );
};

export default ShopDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  topHalfView: {
    backgroundColor: 'cyan',
    width: '100%',
    height: '25%',
  },
  itemDetailsView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  addToCartButton: {
    width: '80%',
    backgroundColor: appOrange,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
