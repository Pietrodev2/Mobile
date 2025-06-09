import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b0057',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1e003d',
    color: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontFamily: 'Inter-Light',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  linkContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  linkText: {
    color: '#3b82f6',
    fontFamily: 'Inter-Light',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: '#FF4444',
    fontFamily: 'Inter-Light',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default styles;
