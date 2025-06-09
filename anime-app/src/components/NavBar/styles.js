import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b0057',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconContainer: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#2b0057',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#444',
    marginTop: 'auto',
  },
  userIcon: {
    fontSize: 24,
    color: '#fff',
  },
  searchIcon: {
    fontSize: 24,
    color: '#fff',
  },
  drawerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  drawerContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  drawerItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  closeDrawerButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeDrawerText: {
    color: '#3b82f6',
    fontSize: 16,
  },
  drawerHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;
