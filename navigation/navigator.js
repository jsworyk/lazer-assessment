import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/HomeScreen";
const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Home} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
