import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>UoV © 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute', // Ensures the footer stays fixed
    bottom: 0, // Positions the footer at the bottom of the screen
    width: width,
    height: 50, // Normal height for a footer
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;
