import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {appOrange} from '../../constants';

const itemList = [
  {id: 1, name: 'Macbook', details: 'a macbook laptop', price: 2500},
  {id: 2, name: 'iPhone', details: 'an iphone phone', price: 1500},
  {id: 3, name: 'iPad', details: 'an ipad pad', price: 800},
  {id: 4, name: 'Tripod', details: 'a tri pod', price: 50},
  {id: 5, name: 'Newtonion Telescope', details: 'a tele scope', price: 500},
  {id: 6, name: 'LED Monitor', details: 'an LED monitor', price: 200},
];

const StoreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Shop Details', {
                  item: item,
                });
              }}
              style={styles.itemTableCell}>
              <View>
                <Image
                  style={styles.appImage}
                  source={require('../../assets/cartIcon.png')}
                />
              </View>
              <View style={styles.itemDetailsView}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>{item.details}</Text>
                <Text>{item.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemTableCell: {
    backgroundColor: appOrange,
    opacity: 0.5,
    margin: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  itemDetailsView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  itemImageView: {},
  appImage: {
    height: 100,
    width: 100,
  },
});
