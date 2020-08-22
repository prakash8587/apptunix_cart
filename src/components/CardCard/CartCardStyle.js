import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  maincontainer: {flex: 1, backgroundColor: '#FFF', borderRadius: 8, padding: 14 },
  iosCard: {
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 2,
      height: 1,
    },
  },
  androidCard: {
    elevation: 4
  },
  imageView: {width: '30%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'},
  cartView: {width: '70%'},
  cartMainView: {flexDirection: 'row'},
  cartNameText: {color: '#212121', opacity: 0.8, fontSize: 14, marginTop: 4, lineHeight: 16, marginRight: 16, width: '70%'},
  cartTitleText: {color: '#0065ff', fontSize: 17, fontWeight: '500', marginTop: 12,},
  cartViewQuantity: {flexDirection: 'row', justifyContent: 'space-between'},
  cartImageTouch: {
    marginTop: 5,
    position: 'absolute',
    right: 0,
    borderRadius: 15,
  },
  cartImage: {width: 14, height: 14},
  cartPriceText: {color: '#0065FF', fontSize: 16, marginTop: 8, alignSelf: 'flex-end'},
  image: {
    width: 60,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'grey'
  },
  cartQuantityView: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    width: '34%'
  },
  cartQuantityText: {width: 30, justifyContent: 'center',
  alignItems:'center', backgroundColor: '#E2e2e2'},
  cartQuantity: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(235, 237, 239, 1)'
  },
  addDelete: {
    width: 90, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#E2E2E2', borderWidth: 1
  },
  plusMinus: { width: 30,
    justifyContent: 'center',
    alignItems:'center'
  },
  cartImgOuterView: { flexDirection: 'row', justifyContent: 'space-between' },
  priceAndQuantity: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 18}
});
