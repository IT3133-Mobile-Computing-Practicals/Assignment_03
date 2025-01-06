import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Import screens
import ProfileTab from '../screens/Profile';
import CourseTab from '../screens/Course';
import SubjectTab from '../screens/Subjects';

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const DashboardPage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? '#007AFF' : '#aaa' }}>👤</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={CourseTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? '#007AFF' : '#aaa' }}>📚</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Subject"
        component={SubjectTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? '#007AFF' : '#aaa' }}>📖</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardPage;
