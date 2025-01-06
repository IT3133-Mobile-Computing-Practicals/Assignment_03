import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage"; // Use DashboardPage directly
import ProfileTab from "./screens/Profile"; // Example additional screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UoV Student Care">
        {/* Login Page */}
        <Stack.Screen
          name="UoV Student Care"
          component={LoginPage}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "purple",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
          }}
        />

        {/* Main Dashboard with Tabs */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{
            headerShown: true, // Hide header for the tab navigation
          }}
        />

        {/* Additional Screen (Profile Details Example) */}
        <Stack.Screen
          name="ProfileTab"
          component={ProfileTab}
          options={{
            title: "ProfileTab",
            headerStyle: {
              backgroundColor: "purple",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 20,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
