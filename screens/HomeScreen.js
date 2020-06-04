import React, { useState, useEffect } from "react";
import { FlatList, ActivityIndicator, View, Text, Image } from "react-native";
import { getContacts } from "../redux/contacts/actions";
import { mapDispatchActions } from "../redux/mapDispatchActions";
import { useDispatch, useMappedState } from "redux-react-hook";
import ContactTile from "../components/ContactTile";
const mappedState = state => ({
  contacts: state.contactReducer.contacts,
  page: state.contactReducer.page
});
export default () => {
  const { contacts, page } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ getContacts }, dispatch);
  useEffect(() => {
    actions.getContacts(page);
    console.log(contacts, "contacts");
  }, []);
  const _renderItem = ({ item, index }) => <ContactTile item={item} index={index} />;
  return (
    <>
      {contacts && contacts.length > 0 ? (
        <FlatList data={contacts} renderItem={_renderItem} />
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};
