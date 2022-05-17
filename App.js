import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputFunction from './componentes/Input/input';

export default function App() {
  return (
    <View style={styles.container}>
      <InputFunction email='Email...' log='Logar' pswd='Password...'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
