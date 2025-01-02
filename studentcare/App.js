import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/LoginPage";

const Stack = createNativeStackNavigator();

const Dashboard = () => (
  <View>
    <Text>Dashboard Screen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UoV Student Care">
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

        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
