import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
