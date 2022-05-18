import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InputFunction from './componentes/Input/input';
import LoginPage from './pages/afterLogin/afterLogin';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName='InputFunction'>
        <Stack.Screen name='InputFunction' component={InputFunction}/>
        <Stack.Screen name='LoginPage' component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


