import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SyncContacts from "../screens/SyncContacts";
const Stack = createStackNavigator();

function RootNavigation(navigation) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Sync" component={SyncContacts} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
