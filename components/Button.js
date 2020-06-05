import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export default ({ label, onPressHandler }) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler()} style={styles.buttonWrapper}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: "blue",
    width: "90%",
    height: 40,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold"
  }
});
