import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { getContacts } from "../redux/contacts/actions";
import { mapDispatchActions } from "../redux/mapDispatchActions";
import { useDispatch, useMappedState } from "redux-react-hook";
import ContactTile from "../components/ContactTile";
import Button from "../components/Button";
const SETTINGS = require("../assets/drawer_settings.png");
const mappedState = state => ({
  contacts: state.contactReducer.contacts
});
export default ({ navigation }) => {
  const [page, setPage] = useState(1);
  const { contacts } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ getContacts }, dispatch);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image
            source={SETTINGS}
            style={{ height: 30, width: 30, borderRadius: 15, marginRight: 15 }}
          />
        </TouchableOpacity>
      )
    });
    actions.getContacts(page);
  }, []);
  const loadNextPage = () => {
    let index = page;
    index++;
    actions.getContacts(index);
    setPage(index);
  };
  const _renderItem = ({ item, index }) => (
    <ContactTile navigation={navigation} item={item} index={index} />
  );
  return (
    <>
      {contacts && contacts.length > 0 ? (
        <FlatList
          style={{ backgroundColor: "white", flex: 1 }}
          /* Always showing list footer...
          in a real world implementation 
          an API response is something that can change so it
          feels weird to conditionally show or hide the show more button.
          Pseudo Code for hiding it: 
          if the length of contacts array === the 'total' field included in the API response. We know we have hit the end of the list.
           */
          ListFooterComponent={() => <Button onPressHandler={loadNextPage} label="Load More" />}
          data={contacts}
          renderItem={_renderItem}
        />
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};
