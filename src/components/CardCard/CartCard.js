import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './CartCardStyle';
import {formatAmount} from '../../utils/utils';

const CartCard = (props) => {
  const { item = {} } = props;
  return (
    <View style={[styles.maincontainer, Platform.OS === "android" ? styles.androidCard : styles.iosCard]}>
      <View style={styles.cartImgOuterView}>
        <Text style={styles.cartNameText}>{item.description}</Text>
        {item.image && (
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        )}
      </View>
      <View style={styles.priceAndQuantity}>
        <Text style={styles.cartPriceText}>{formatAmount(item.price)}</Text>
        <View style={styles.addDelete}>
          <TouchableOpacity
            style={
              styles.plusMinus}
            onPress={props.decreaseQuantity}>
              {item.count === 1 ?
                <Image
                source={require('../../assets/trash.png')}
                style={styles.cartImage}
                />
             : <Text>-</Text>  
            }
          </TouchableOpacity>
          <View style={styles.cartQuantityText}>
            <Text>{item.count}</Text>
          </View>
          <TouchableOpacity
            style={styles.plusMinus}
            onPress={props.increaseQuantity}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
