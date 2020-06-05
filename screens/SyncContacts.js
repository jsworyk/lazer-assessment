import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Contacts from "react-native-contacts";
import { FlatList } from "react-native-gesture-handler";
import Button from "../components/Button";
import ContactTile from "../components/ContactTile";
import { getColorSheet } from "../constants";
import { useMappedState } from "redux-react-hook";

const mappedState = state => ({
  darkTheme: state.themeReducer.darkTheme
});

export default ({ navigation }) => {
  const { darkTheme } = useMappedState(mappedState);
  const [retrievedContacts, setRetrievedContacts] = useState([]);
  const getContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) {
        throw err;
      }
      setRetrievedContacts(contacts);
    });
  };
  useEffect(() => {
    navigation.setOptions({
      title: "Sync Contacts",
      headerStyle: {
        backgroundColor: getColorSheet(darkTheme).background
      },
      headerTintColor: getColorSheet(darkTheme).text
    });
  }, []);
  const renderItem = ({ item, index }) => {
    let obj = {};
    obj.first_name = item.givenName;
    obj.last_name = item.familyName;
    obj.email =
      item.emailAddresses && item.emailAddresses[0] && item.emailAddresses[0].email
        ? item.emailAddresses[0].email
        : null;
    obj.avatr = item.thumbnailPath;
    return <ContactTile sync navigation={navigation} item={obj} index={index} />;
  };
  return (
    <View style={{ backgroundColor: getColorSheet(darkTheme).background, flex: 1, padding: 12 }}>
      <FlatList
        renderItem={renderItem}
        data={retrievedContacts && retrievedContacts.length > 0 ? retrievedContacts : null}
        ListFooterComponent={() => <Button label="Sync" onPressHandler={getContacts} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
