import React from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './CartHeaderStyle';

const CartHeader = (props) => {
  return (
    <SafeAreaView style={styles.cartHeaderContainer}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={props.onBackPress}>
        <Image
          style={styles.backImg}
          source={require('../../assets/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.cartHeaderText}>Cart</Text>
    </SafeAreaView>
  );
};

export default React.memo(CartHeader);
