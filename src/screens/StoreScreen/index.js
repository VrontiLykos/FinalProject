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
  {
    id: 1,
    name: 'Macbook',
    details: 'a macbook laptop',
    price: 2500,
    image: require('../../assets/cartIcon.png'),
  },
  {
    id: 2,
    name: 'iPhone',
    details: 'an iphone phone',
    price: 1500,
    image: require('../../assets/cartIcon.png'),
  },
  {
    id: 3,
    name: 'iPad',
    details: 'an ipad pad',
    price: 800,
    image: require('../../assets/cartIcon.png'),
  },
  {
    id: 4,
    name: 'Tripod',
    details: 'a tri pod',
    price: 50,
    image: require('../../assets/cartIcon.png'),
  },
  {
    id: 5,
    name: 'Newtonion Telescope',
    details: 'a tele scope',
    price: 500,
    image: require('../../assets/cartIcon.png'),
  },
  {
    id: 6,
    name: 'LED Monitor',
    details: 'an LED monitor',
    price: 200,
    image: require('../../assets/cartIcon.png'),
  },
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
                <Image style={styles.appImage} source={item.image} />
              </View>
              <View style={styles.itemDetailsView}>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>${item.price}</Text>
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
    margin: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: appOrange,
  },
  itemDetailsView: {
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
  },
  appImage: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
  },
});
