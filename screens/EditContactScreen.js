import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default ({ item }) => {
  const [firstName, setFirstName] = useState(item.first_name);
  const [lastName, setLastName] = useState(item.last_name);
  const [email, setEmail] = useState(item.email);
  return (
    <View>
      <Image
        style={{ height: 120, width: 120, borderRadius: 60, alignSelf: "center" }}
        source={{ uri: item.avatar }}
      />
      <View style={{ marginTop: 8 }}>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={text => setFirstName(text)}
          placeholder={firstName}
          placeholderTextColor="#000"
        />
        <TextInput style={styles.input} placeholder={item.last_name} placeholderTextColor="#000" />
        <TextInput style={styles.input} placeholder={item.email} placeholderTextColor="#000" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 8
  },
  fieldTitle: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: "bold"
  },
  fieldValue: {
    marginTop: 8,
    fontSize: 14
  },
  input: {
    height: 40
  }
});
