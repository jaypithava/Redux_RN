import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
const Header = () => {
  const [cartItem, setCartItem] = useState(0);
  const cartData = useSelector(state => state.reducer);
  useEffect(() => {
    setCartItem(cartData.length);
  }, [cartData]);
  return (
    <View>
      <Text style={styles.cartItemStyle}>
        <View style={styles.cartItemView}>
          <Text style={styles.subCartText}>{cartItem}</Text>
        </View>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  cartItemView: {
    width: 40,
    height: 40,
    backgroundColor: 'yellow',
    borderRadius: 20,
  },
  cartItemStyle: {
    fontSize: 30,
    textAlign: 'right',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'orange',
  },
  subCartText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
