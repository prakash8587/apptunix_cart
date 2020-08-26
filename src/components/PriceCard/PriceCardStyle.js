import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  priceCardOuterView: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 50,
  },
  priceDetailsText: {
    margin: 14,
  },
  line: {height: 1, backgroundColor: '#E2e2e2'},
  totalAmountContainer: {
    flexDirection: 'row',
    margin: 14,
    marginTop: 12,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  deliveryFeeValue: {
    color: 'green',
  },
  deliveryFeeContainer: {
    flexDirection: 'row',
    margin: 14,
    marginTop: 12,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    margin: 14,
    marginBottom: 0,
    justifyContent: 'space-between',
  },
});
