import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import CartHeader from '../../components/CartHeader/CartHeader';
import CartCard from '../../components/CardCard/CartCard';
import {styles} from './CartScreenStyle';
import { formatAmount } from '../../utils/utils';
import {changeQuantity, placeOrder, resetOrderStatus} from '../../redux/action/action'

class CartScreen extends Component {


  componentDidMount() {
    this.props.resetOrderStatus()
  }

  changeQuantity = (index, type) => {
    this.props.changeQuantity(index, type) 
  }

  renderPriceCard = () => {
    const {totalPrice, cartArr} = this.props;
    return (
      <View style={styles.priceCardOuterView}>
        <Text style={styles.priceDetailsText}>PRICE DETAILS</Text>
        <View style={styles.line}/>
        <View style={styles.price}>
            <Text>{`Price (${cartArr.length} Items)`}</Text>
            <Text>{formatAmount(totalPrice)}</Text>
        </View>
        <View style={styles.deliveryFeeContainer}>
            <Text>Delivery Fee</Text>
            <Text style={styles.deliveryFeeValue}>FREE</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.totalAmountContainer}>
            <Text>Total Amount</Text>
            <Text>{formatAmount(totalPrice)}</Text>
        </View>
        <View style={styles.line}/>
      </View>
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

  renderEmptyView = () => (
    <View style={styles.emptyView}>
      <View style={styles.empty}/>
      <Image source={require('../../assets/empty.png')}/>
       <Text style={styles.emptyTitle}>Your Cart is Empty!</Text>
       <Text style={styles.emptyDesc}>Add items to it now</Text>
       <TouchableOpacity
        style={
          styles.shopNow}
        onPress={() => this.props.navigation.goBack()}>
        <Text style={styles.cartText}>Shop now</Text>
      </TouchableOpacity>
    </View>
  )

  renderSuccessView = () => (
    <View style={styles.successOuter}>
      <View style={styles.empty}/>
      <Image style={styles.successImg} source={require('../../assets/success.png')}/>
       <Text style={styles.successText}>Your Order has been successfully placed</Text>
       <Text style={styles.successDesc}>Thank you for shopping with us</Text>
       <TouchableOpacity
        style={
          styles.shopNow}
        onPress={() => {
          this.props.resetOrderStatus()
          this.props.navigation.goBack()}}>
        <Text style={styles.cartText}>Shop now</Text>
      </TouchableOpacity>
    </View>
  )

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
          keyExtractor={(item, index) => item && item.description}
          renderItem={({item, index}) => {
            return (
              <CartCard
                item={item}
                decreaseQuantity={() => this.changeQuantity(index, 'decrease')}
                increaseQuantity={() => this.changeQuantity(index, 'increase')}
                deleteCartItem={() => this.deleteCartItem(index)}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
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
