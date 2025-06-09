import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b0057',
  },
  listContainer: {
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: '#FF4444',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 10,
  },
  pageButton: {
    color: '#3b82f6',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  pageNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  currentPage: {
    color: '#3b82f6',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#2b0057',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#1e003d',
    color: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
});
