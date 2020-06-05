import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";
export default ({ item, index, navigation }) => {
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
        <Text style={styles.name}>{`${item.first_name} ${item.last_name}`}</Text>
        <Text style={styles.email}>{item.email}</Text>
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
