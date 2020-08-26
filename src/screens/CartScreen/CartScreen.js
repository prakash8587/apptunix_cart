import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import CartHeader from '../../components/CartHeader/CartHeader';
import CartCard from '../../components/CardCard/CartCard';
import {styles} from './CartScreenStyle';
import { formatAmount } from '../../utils/utils';
import {changeQuantity, placeOrder, resetOrderStatus} from '../../redux/action/action'
import PriceCard from '../../components/PriceCard/PriceCard';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import CartEmpty from '../../components/CartEmpty/CartEmpty';

class CartScreen extends Component {

  componentDidMount() {
    this.props.resetOrderStatus()
  }

  changeQuantity = (index, type) => this.props.changeQuantity(index, type) 
  

  renderPriceCard = () => {
    const {totalPrice, cartArr} = this.props;
    return(
    <PriceCard
      totalPrice={totalPrice}
      cartArr={cartArr}
    />
    )
  }

  renderFooterButton = () => {
    const {totalPrice} = this.props;
    return (
      <View style={styles.cartView}>
      <Text style={styles.footerPrice}>{formatAmount(totalPrice)}</Text>
      <TouchableOpacity
        style={
          styles.cartTouch}
          onPress={this.placeOrder}>
        <Text style={styles.cartText}>Place Order</Text>
      </TouchableOpacity>
    </View>
    )
  }

  placeOrder = () => {
    this.props.placeOrder()
  }

  renderEmptyView = () => <CartEmpty onPress={() => this.props.navigation.goBack()}/>

  renderSuccessView = () => {
    return (
      <SuccessModal
       onPress={this.onShopNowPress}
      />
    )
  }

  onShopNowPress = () => {
    this.props.resetOrderStatus();
    this.props.navigation.goBack();
  }

  renderSeperator = () => <View style={styles.seperator} />

  renderItem = ({item, index}) => {
    return (
      <CartCard
        item={item}
        decreaseQuantity={() => this.changeQuantity(index, 'decrease')}
        increaseQuantity={() => this.changeQuantity(index, 'increase')}
        deleteCartItem={() => this.deleteCartItem(index)}
      />
    );
  }

  getKeyExtractor = (item, index) => `${item.description}${index.toString()}`

  render() {
    const {cartArr = [], orderStatus} = this.props;
    return (
      <SafeAreaView style={styles.MainContainer}>
        
        {(cartArr && cartArr.length > 0) ?
        <>
        <CartHeader 
          onBackPress={() => this.props.navigation.goBack()}
        />
        <FlatList
          data={cartArr}
          extraData={cartArr.length}
          style={styles.listPadding}
          keyExtractor={this.getKeyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeperator}
          ListFooterComponent={() => this.renderPriceCard()}
        />
        {this.renderFooterButton()}
        </>
        :
        orderStatus === "success" ?
        this.renderSuccessView() :
        this.renderEmptyView()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartArr: state.cartArr,
    totalPrice: state.totalPrice,
    orderStatus: state.orderStatus
  }
}

const mapDispatchToProps = {
  changeQuantity,
  placeOrder,
  resetOrderStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
