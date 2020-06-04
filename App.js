import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text } from "react-native";
import RootNavigation from "./navigation/navigator";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "./redux/store";
import { StoreContext } from "redux-react-hook";

export default function App() {
  return (
    <StoreContext.Provider value={configureStore()}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
