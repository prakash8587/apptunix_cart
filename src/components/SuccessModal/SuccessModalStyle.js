import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  empty: {
    height: '20%', 
    width: '100%'
  },
  successOuter: {
    flex: 1, 
    backgroundColor: '#FFF', 
    alignItems: 'center'
  },
  successImg: {
    height: 160, 
    width: 160
  },
  successText: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 50,
    textAlign: 'center',
  },
  successDesc: {
    fontSize: 14, 
    marginTop: 14
  },
  shopNow: {
    backgroundColor: '#0065FF',
    width: 120,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  shopNowText: {
    color: '#FFF',
    fontSize: 16
  }
});
