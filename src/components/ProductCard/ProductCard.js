import React from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import {styles} from './ProductCardStyle';
import {formatAmount} from '../../utils/utils';

const ProductCard = (props) => {
  const {item = {}} = props;
  return (
    <View style={[styles.maincontainer, Platform.OS === "android" ? styles.androidCard : styles.iosCard]}>
      <View style={styles.imageView}>
        {item.image && (
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        )}
      </View>
      <View style={styles.productView}>
        <Text numberOfLines={2} style={styles.productTitleText}>{item.description}</Text>
        <View style={styles.addToCartAndPrice}>
        <Text style={styles.productPriceText}>{formatAmount(item.price)}</Text>
        <TouchableOpacity
          disabled={props.isDisabled}
          style={[styles.addToCartButton, {opacity: props.isDisabled ? 0.4 : 1,
          }]}
          onPress={props.onPress}>
          <Image
            style={styles.addToCartImg}
            source={require('../../assets/cart.png')}
          />
          <Text
            style={styles.addToCartText}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
