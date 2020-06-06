import React, { useEffect } from "react";
import { ScrollView, Text, Switch, StyleSheet, View } from "react-native";
import { useMappedState, useDispatch } from "redux-react-hook";
import { mapDispatchActions } from "../redux/mapDispatchActions";
import { toggleTheme } from "../redux/theme/actions";
import { getColorSheet } from "../constants";

const mappedState = state => ({
  darkTheme: state.themeReducer.darkTheme
});

export default ({ navigation }) => {
  const { darkTheme } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ toggleTheme }, dispatch);
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: getColorSheet(darkTheme).background
      },
      headerTintColor: getColorSheet(darkTheme).text
    });
  }, [darkTheme]);
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: getColorSheet(darkTheme).background }]}
    >
      <View style={styles.settingsItemWrapper}>
        <Text style={[styles.settingsItemText, { color: getColorSheet(darkTheme).text }]}>
          Dark Mode
        </Text>
        <Switch value={darkTheme} onValueChange={val => actions.toggleTheme(val)} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  },
  settingsItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  settingsItemText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold"
  }
});
