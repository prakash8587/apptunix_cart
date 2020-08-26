import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './SuccessModalStyle';

const SuccessModal = (props) => {
  return (
    <View style={styles.successOuter}>
      <View style={styles.empty} />
      <Image
        style={styles.successImg}
        source={require('../../assets/success.png')}
      />
      <Text style={styles.successText}>
        Your Order has been successfully placed
      </Text>
      <Text style={styles.successDesc}>Thank you for shopping with us</Text>
      <TouchableOpacity
        style={styles.shopNow}
        onPress={props.onPress}>
        <Text style={styles.shopNowText}>Shop now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SuccessModal);
