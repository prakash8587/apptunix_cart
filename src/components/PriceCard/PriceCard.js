import React, {useState, useEffect} from 'react';
import {View, Text } from 'react-native';
import {styles} from './PriceCardStyle';
import {formatAmount} from '../../utils/utils';

const PriceCard = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartArr, setCartArr] = useState([]);

  useEffect(() => {
    setTotalPrice(props.totalPrice);
    setCartArr(props.cartArr);
  });

  return (
    <View style={styles.priceCardOuterView}>
      <Text style={styles.priceDetailsText}>PRICE DETAILS</Text>
      <View style={styles.line} />
      <View style={styles.price}>
        <Text>{`Price (${cartArr.length} Items)`}</Text>
        <Text>{formatAmount(totalPrice)}</Text>
      </View>
      <View style={styles.deliveryFeeContainer}>
        <Text>Delivery Fee</Text>
        <Text style={styles.deliveryFeeValue}>FREE</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.totalAmountContainer}>
        <Text>Total Amount</Text>
        <Text>{formatAmount(totalPrice)}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default React.memo(PriceCard);
