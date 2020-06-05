import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, View, Text, Image } from "react-native";
import { getContacts } from "../redux/contacts/actions";
import { mapDispatchActions } from "../redux/mapDispatchActions";
import { useDispatch, useMappedState } from "redux-react-hook";
import ContactTile from "../components/ContactTile";
import Button from "../components/Button";
const mappedState = state => ({
  contacts: state.contactReducer.contacts
});
export default ({ navigation }) => {
  const [page, setPage] = useState(1);
  const { contacts } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ getContacts }, dispatch);
  useEffect(() => {
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
