import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b0057',
  },
  content: {
    flex: 1,
    paddingTop: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingVertical: 15,
    gap: 10,
  },
  pageButton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    marginHorizontal: 5,
  },
  pageNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-Light',
    marginHorizontal: 5,
  },
  currentPage: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#3b82f6',
  },
});

export default styles;
