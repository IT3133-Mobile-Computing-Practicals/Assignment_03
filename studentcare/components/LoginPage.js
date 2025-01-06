import {React,useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get screen width and height
import { students } from '../database/StudentDb';

const LoginPage = () => {
  const navigation = useNavigation();

  // State to hold the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
  
    // Check if username and password match any record in the students database
    const user = students.find(
      student => student.username === username && student.password === password
    );
  
    if (user) {
      // Navigate to the dashboard if the user is found
      navigation.navigate('Dashboard', { userId: user.id });
    } else {
      // Show an error message if credentials are incorrect
      alert('Invalid username or password');
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

      <View style={styles.footerContainer}>
      
    </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: width * 0.8,  
    height: height * 0.25, 
    marginTop: 20,
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
  footerContainer: {
    position: 'absolute', // Ensures the footer stays fixed
    bottom: 0, // Positions the footer at the bottom of the screen
    width: width,
    height: 50, // Normal height for a footer
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginPage;