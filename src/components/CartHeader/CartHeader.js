import React, {Component} from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './CartHeaderStyle';

class CartHeader extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.cartHeaderContainer}>
        <TouchableOpacity style={styles.backContainer} onPress={this.props.onBackPress}>
          <Image style={styles.backImg} source={require('../../assets/back.png')}/>
        </TouchableOpacity>
        <Text style={styles.cartHeaderText}>Cart</Text>
      </SafeAreaView>
    );
  }
}

export default CartHeader;
