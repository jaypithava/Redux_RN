import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Text style={styles.cartItemStyle}>0</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  cartItemStyle: {
    fontSize: 30,
    textAlign: 'right',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'orange',
  },
});
