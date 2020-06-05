import React from "react";
import { ScrollView, Text, Switch, StyleSheet, View } from "react-native";

export default () => {
  return (
    <ScrollView style={[styles.container, { backgroundColor: "#FFF" }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}>Dark Mode</Text>
        <Switch />
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
