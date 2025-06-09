import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b0057',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    color: '#3b82f6',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3b82f6',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  editButton: {
    borderWidth: 1,
    borderColor: '#3b82f6',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  editButtonText: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: '#FF4444',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutText: {
    color: '#FF4444',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
