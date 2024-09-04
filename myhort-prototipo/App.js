// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './components/screens/intro/index';
import LoginScreen from './components/screens/login/index';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName="intro">
      <Tab.Screen name="IntroScrenn" component={IntroScreen} />
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="intro"
          component={IntroScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho na tela de introdução
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }} // Oculta o cabeçalho nas telas de tabs
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
