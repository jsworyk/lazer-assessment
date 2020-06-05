import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useMappedState, useDispatch } from "redux-react-hook";
import { mapDispatchActions } from "../redux/mapDispatchActions";
import { setContactList } from "../redux/contacts/actions";

const mappedState = state => ({
  contacts: state.contactReducer.contacts
});

export default ({ item, navigation, route }) => {
  const { contacts } = useMappedState(mappedState);
  const [firstName, setFirstName] = useState(item.first_name);
  const [lastName, setLastName] = useState(item.last_name);
  const [email, setEmail] = useState(item.email);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ setContactList }, dispatch);
  const editing = () => {
    if (firstName !== item.first_name || lastName !== item.last_name || email !== item.email) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={editing() ? () => updateContact() : null}
          style={{ paddingRight: 12, fontSize: 18, color: "#2962FF" }}
        >
          {editing() ? "Save" : "Cancel"}
        </Text>
      )
    });
  }, [firstName, lastName, email]);
  const updateContact = () => {
    let arr = contacts;
    let index = route.params.index;
    let insert = contacts[index];
    insert.first_name = firstName;
    insert.last_name = lastName;
    insert.email = email;
    arr[index] = insert;
    actions.setContactList(arr);
  };
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
        <TextInput
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
          placeholder={lastName}
          placeholderTextColor="#000"
        />
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          placeholder={email}
          placeholderTextColor="#000"
        />
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
    height: 40,
    fontSize: 16
  }
});
