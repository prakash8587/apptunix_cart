import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './ProductScreenStyle';
import ListHeader from '../../components/ListHeader/ListHeader';
import ProductCard from '../../components/ProductCard/ProductCard';
import {connect} from 'react-redux';
import {fetchProductList, addToCart} from '../../redux/action/action';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProductList();
  }

  addItemToCart = (item) => {
    this.props.addToCart(item);
  };

  navigateToCartScreen = () => {
    const {navigation} = this.props;
    navigation.navigate('Cart');
  };

  render() {
    const {productArr = [], cartArr = []} = this.props;
    return (
      <SafeAreaView style={styles.MainContainer}>
        <ListHeader
          disabled={cartArr.length === 0}
          onPress={this.navigateToCartScreen}
          text={cartArr.length}
        />
        <FlatList
          data={productArr}
          style={styles.listPadding}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const arr = cartArr.filter((it) => it.name === item.name);
            return (
              <ProductCard
                onPress={() => this.addItemToCart(item)}
                isDisabled={arr.length > 0}
                item={item}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          ListFooterComponent={() => <View style={styles.footer} />}
        />
        <View style={styles.cartView}>
          <TouchableOpacity
            style={[
              styles.cartTouch,
              {
                opacity: cartArr.length === 0 ? 0.4 : 1,
              },
            ]}
            disabled={cartArr.length === 0}
            onPress={this.navigateToCartScreen}>
            <Text style={styles.cartText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateFromProps = (state) => {
  // console.log("state", state)
  return {
    productArr: state.productArr,
    cartArr: state.cartArr,
  };
};

const mapDispatchToProps = {
  fetchProductList,
  addToCart,
};

export default connect(mapStateFromProps, mapDispatchToProps)(ProductScreen);
