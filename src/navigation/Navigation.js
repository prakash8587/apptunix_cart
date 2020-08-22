import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import Product from '../screens/ProductScreen/ProductScreen';
import Cart from '../screens/CartScreen/CartScreen';

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    Product: {screen: Product},
    Cart: {screen: Cart},
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
