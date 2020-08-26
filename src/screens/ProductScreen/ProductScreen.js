import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import {styles} from './ProductScreenStyle';
import ListHeader from '../../components/ListHeader/ListHeader';
import ProductCard from '../../components/ProductCard/ProductCard';
import { fetchProductList, addToCart } from "../../redux/action/action";
import { ROUTES } from '../../utils/Routes';

class ProductScreen extends Component {

  componentDidMount() {
      this.props.fetchProductList()
  }

  addItemToCart = (item) => {
    this.props.addToCart(item)
  };

  navigateToCartScreen = () => {
    const {navigation} = this.props;
    navigation.navigate(ROUTES.CART);
  };

  renderItem = (item, cartArr) => {
    const arr = cartArr.filter(
      (it) => it.name === item.name,
    );
    return (
      <ProductCard
        onPress={() => this.addItemToCart(item)}
        item={item}
        arr={arr}
      />
    );
  }

  getKeyExtractor = (item, index) => `${item.name}${index.toString()}`

  renderSeperator = () => <View style={styles.seperator} />

  renderFooter = () => <View style={styles.footer} />

  render() {
    const { productArr = [], cartArr = [] } = this.props;
    return (
      <SafeAreaView style={styles.MainContainer}>
        <ListHeader onPress={this.navigateToCartScreen} text={cartArr.length} />
        <FlatList
          data={productArr}
          extraData={productArr}
          style={styles.listPadding}
          keyExtractor={this.getKeyExtractor}
          renderItem={({item}) => this.renderItem(item, cartArr)}
          ItemSeparatorComponent={this.renderSeperator}
          ListFooterComponent={this.renderFooter}
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

const mapStateFromProps = state => {
  return {
    productArr: state.productArr,
    cartArr: state.cartArr
  }
}

const mapDispatchToProps = {
  fetchProductList,
  addToCart
}

export default connect(mapStateFromProps, mapDispatchToProps)(ProductScreen);
