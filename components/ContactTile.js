import React, { useEffect } from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
import { useMappedState } from "redux-react-hook";
const mappedState = state => ({
  darkTheme: state.themeReducer.darkTheme
});
export default ({ item, index, navigation }) => {
  const { darkTheme } = useMappedState(mappedState);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Contact", {
          Contact: item,
          index
        });
      }}
      style={styles.container}
    >
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={styles.contactInfoContainer}>
        <Text
          style={[styles.name, { color: darkTheme ? "#FFF" : "#333" }]}
        >{`${item.first_name} ${item.last_name}`}</Text>
        <Text style={[styles.email, { color: darkTheme ? "#FFF" : "#333" }]}>{item.email}</Text>
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
  }
});
