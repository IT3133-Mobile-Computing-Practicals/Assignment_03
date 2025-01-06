import {React,useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get screen width and height

const LoginPage = () => {
  const navigation = useNavigation();

  // State to hold the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here, like validation or authentication
    if (username && password) {
      navigation.navigate('Dashboard');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/uovlogo.png')}
        style={styles.logo}
        resizeMode="contain" // Ensure the image fits within the screen while maintaining aspect ratio
      />

      {/* Title */}
      <Text style={styles.title}>STUDENT LOGIN</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures content takes enough space for scrolling
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: width * 0.8,  
    height: height * 0.25, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 12,
  },
});

export default LoginPage;
