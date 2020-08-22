import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './ListHeaderStyle';

class ListHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.productTitle}>Product Screen</Text>
        <TouchableOpacity
          style={[styles.cartButton, {opacity: this.props.disabled ? 0.5 : 1}]}
          disabled={this.props.disabled}
          onPress={this.props.onPress}>
          {this.props.text !== 0 && (
            <View style={styles.cartCount}>
              <Text style={styles.cartCountText}>{this.props.text}</Text>
            </View>
          )}
          <Image
            style={styles.cartImage}
            source={require('../../assets/cart.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ListHeader;
