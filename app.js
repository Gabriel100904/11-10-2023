import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaCadastro from './TelaCadastro';  
import TelaJogadores from './TelaJogadores';  

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaCadastro">
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaJogadores" component={TelaJogadores} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
