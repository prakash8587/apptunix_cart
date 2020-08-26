import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  listPadding: {padding: 16},
  seperator: {
    height: 10,
    width: '100%',
  },
  footer: {
    height: 60,
    width: '100%',
  },
  cartView: {
    backgroundColor: '#fff',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#404040',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  cartTouch: {
    backgroundColor: '#fb641b',
    width: 120,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {fontSize: 16, color: '#fff'},
  shopNow: {
    backgroundColor: '#0065FF',
    width: 120,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  footerPrice: {fontSize: 18, color: '#0065FF', fontWeight: '500'},
});
