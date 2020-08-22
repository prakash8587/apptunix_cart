import {StyleSheet, Platform} from 'react-native';
export const styles = StyleSheet.create({
  maincontainer: {flex: 1, flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 8, padding: 14 },
  iosCard: {
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
  },
  androidCard: {
    elevation: 4
  },
  imageView: { width: '28%', justifyContent: 'center', alignItems:'center'},
  productView: {width: '72%', paddingLeft: 14},
  productTitleText: {color: '#212121', fontSize: 14, fontWeight: '500'},
  productNameText: {color: '#212121', opacity: 0.8, fontSize: 14, marginTop: 4, lineHeight: 14, marginRight: 16},
  priceOuterView: {backgroundColor: '#0065FF', alignSelf: 'flex-start', padding: 4, borderRadius: 8},
  productPriceText: {color: '#0065FF', fontSize: 16, marginTop: 8, alignSelf: 'flex-end' },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8
  },
  addToCartAndPrice: {flexDirection: 'row', justifyContent: 'space-between'},
  addToCartButton: {
    backgroundColor: '#ff9f00',
    width: 100,
    height: 24,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  addToCartImg: {width: 14, height: 14,},
  addToCartText: {
    color: '#fff',
    fontSize: 13,
  }
});
