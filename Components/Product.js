import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './Redux/action';

const Product = ({item}) => {
  //For Calling action we need to create dispatch
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
    setIsAdded(true);
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.id));
    setIsAdded(false);
  };

  useEffect(() => {
    if (cartItems && cartItems.length) {
      const foundItem = cartItems.find(cartItem => cartItem.id === item.id);
      setIsAdded(!!foundItem);
    }
  }, [cartItems, item.id]);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.itemName}>Name: {item.title}</Text>
          <Text style={styles.itemPrice}>Price: {item.price}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Image style={styles.itemImage} source={{uri: item.image}} />
        </View>
      </View>
      <View>
        {isAdded ? (
          <Button
            title="Remove to cart"
            onPress={() => handleRemoveFromCart(item)}
          />
        ) : (
          <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
        )}
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  itemDescription: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  itemImage: {
    width: 150,
    height: 200,
  },
});
