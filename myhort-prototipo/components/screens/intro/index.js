// screens/IntroScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao MyHortiApp!</Text>
      <Text style={styles.subtitle}>Seu app de pedidos hortifruti</Text>
      <Button
        title="Avançar"
        onPress={() => navigation.navigate('LoginScreen')}
        color="#4CAF50" // Botão com cor verde, por exemplo
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default IntroScreen;
