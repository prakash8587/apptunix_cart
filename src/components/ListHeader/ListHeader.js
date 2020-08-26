import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './ListHeaderStyle';

const ListHeader = (props) => {

  const [cartCount, setCartCount] = useState(props.text);
  const [disabled, setDisabled] = useState(false)


  useEffect(() => {
    setCartCount(props.text)
    setDisabled(props.text === 0)
  })

    return (
      <View style={styles.headerContainer}>
        <Text style={styles.productTitle}>Product Screen</Text>
        <TouchableOpacity 
          style={[styles.cartButton, {opacity: disabled ? 0.5 : 1}]}
          disabled={disabled} onPress={props.onPress}>
          {cartCount !== 0 &&
          <View style={styles.cartCount}>
            <Text style={styles.cartCountText}>{cartCount}</Text>
          </View>}
          <Image
            style={styles.cartImage}
            source={require('../../assets/cart.png')}
          />
        </TouchableOpacity>
      </View>
    );
}

export default ListHeader;
