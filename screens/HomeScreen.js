import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getContacts } from "../redux/contacts/actions";
import { mapDispatchActions } from "../redux/mapDispatchActions";
import { useDispatch, useMappedState } from "redux-react-hook";
const mappedState = state => ({
  contacts: state.contactReducer.contacts
});
export default () => {
  const { contacts } = useMappedState(mappedState);
  const dispatch = useDispatch();
  const actions = mapDispatchActions({ getContacts }, dispatch);
  const [page, setPage] = useState(1);
  useEffect(() => {
    actions.getContacts();
  });
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
