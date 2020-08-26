import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './CartEmptyStyle';

const CartEmpty = (props) => { 
  return (
    <View style={styles.emptyView}>
      <View style={styles.empty}/>
      <Image source={require('../../assets/empty.png')}/>
       <Text style={styles.emptyTitle}>Your Cart is Empty!</Text>
       <Text style={styles.emptyDesc}>Add items to it now</Text>
       <TouchableOpacity
        style={
          styles.shopNow}
        onPress={props.onPress}>
        <Text style={styles.shopNowText}>Shop now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(CartEmpty);
