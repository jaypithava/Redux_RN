import {StyleSheet, View, ScrollView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import Product from './Product';

const ProductWrapper = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Go to ProductList"
        onPress={() => navigation.navigate('UserList')}
      />
      <Header />
      <ScrollView>
        {data.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductWrapper;

const styles = StyleSheet.create({
  container: {flex: 1},
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
