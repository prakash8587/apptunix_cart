import React, { useEffect } from 'react';
import {View, Image} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {styles} from './SplashScreenStyle'
import { ROUTES } from '../../utils/Routes';
const SplashScreen = (props) => {
  useEffect(() => {
    navigateToProductScreen()
  })

  navigateToProductScreen = () => {
    setTimeout(() => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: ROUTES.PRODUCT })],
        });
        props.navigation.dispatch(resetAction)
    }, 5000);
  };

    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/shopping.png')}
          style={styles.img}
        />
      </View>
    );
}

export default  React.memo(SplashScreen);