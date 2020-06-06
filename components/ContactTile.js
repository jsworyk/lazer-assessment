import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { useMappedState } from "redux-react-hook";
import { extractInitialsFromName } from "../utils";
import { getColorSheet } from "../constants";
const mappedState = state => ({
  darkTheme: state.themeReducer.darkTheme
});
export default ({ item, index, navigation, sync }) => {
  const { darkTheme } = useMappedState(mappedState);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Contact", {
          Contact: item,
          index,
          sync
        });
      }}
      style={styles.container}
    >
      {item.avatar ? (
        <Image style={styles.avatar} source={{ uri: item.avatar }} />
      ) : (
        <View style={styles.initialWrapper}>
          <Text style={styles.initialText}>
            {extractInitialsFromName(item.first_name, item.last_name)}
          </Text>
        </View>
      )}
      <View style={styles.contactInfoContainer}>
        <Text
          style={[styles.name, { color: getColorSheet(darkTheme).text }]}
        >{`${item.first_name} ${item.last_name}`}</Text>
        <Text style={[styles.email, { color: getColorSheet(darkTheme).text }]}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  name: {
    fontWeight: "bold"
  },
  email: {
    fontWeight: "normal"
  },
  contactInfoContainer: {
    marginLeft: 8
  },
  initialWrapper: {
    backgroundColor: "#2962FF",
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#2962FF",
    justifyContent: "center"
  },
  initialText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center"
  }
});
