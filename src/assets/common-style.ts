import { StyleSheet } from 'react-native';

export const commonStyle = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1'
  },
  partyName: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 16
  },
  partyAddress: {
    fontSize: 12,
    lineHeight: 16
  },
  flexDirection: {
    flexDirection: 'row'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
})