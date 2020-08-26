import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  listPadding: {
    padding: 16
  },
  seperator: {
    height: 10,
    width: '100%'
  },
  footer: {
    height: 60, width: '100%'
  },
  cartView: {
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#404040',
  },
  cartTouch: {
    backgroundColor: '#fb641b',
    width: '68%',
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 20, 
    color: '#fff'
  }
});
