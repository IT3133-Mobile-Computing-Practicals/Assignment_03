import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Dummy screens for Profile, Course, and Subject
const Profile = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Profile Screen</Text>
  </View>
);

const Course = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Course Screen</Text>
  </View>
);

const Subject = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Subject Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const DashboardPage = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: 'purple', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
      }}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Subject" component={Subject} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DashboardPage;
