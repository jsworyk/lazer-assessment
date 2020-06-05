import React from "react";
import { ScrollView, Text, Switch, StyleSheet, View } from "react-native";
import { useMappedState, useDispatch } from "redux-react-hook";
import { mapDispatchActions } from "../redux/mapDispatchActions";
import { toggleTheme } from "../redux/theme/actions";

const mappedState = state => ({
  darkTheme: state.themeReducer.darkTheme
});

export default () => {
  const { darkTheme } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ toggleTheme }, dispatch);
  return (
    <ScrollView style={[styles.container, { backgroundColor: "#FFF" }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}>Dark Mode</Text>
        <Switch value={darkTheme} onValueChange={val => actions.toggleTheme(val)} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  }
});
