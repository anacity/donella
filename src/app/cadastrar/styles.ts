import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2ea',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#9d5c30',
    borderRadius: 16,
    padding: 8,
    marginBottom: 12,
  },
  button: {
    width: '80%',
    backgroundColor: '#9d5c30',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
