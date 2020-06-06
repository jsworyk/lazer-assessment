import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, Linking } from "react-native";
import { extractInitialsFromName } from "../utils";
import EditContactScreen from "./EditContactScreen";
import { useMappedState } from "redux-react-hook";
import { getColorSheet } from "../constants";
const mappedState = state => ({
  darkTheme: state.themeReducer.darkTheme
});
export default ({ navigation, route }) => {
  const { darkTheme } = useMappedState(mappedState);
  const [offset, setOffset] = useState(0);
  const [user, setUser] = useState({});
  const [index, setIndex] = useState(-1);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    if (
      route &&
      route.params &&
      route.params.Contact &&
      route.params.Contact &&
      route.params.index >= 0
    ) {
      setUser(route.params.Contact);
      setIndex(route.params.index);
    }
    navigation.setOptions({
      title: offset >= 166 ? `${user.first_name} ${user.last_name}` : null,
      headerStyle: {
        backgroundColor: getColorSheet(darkTheme).background
      },
      headerTintColor: getColorSheet(darkTheme).text,
      headerRight:
        route && route.params && !route.params.sync
          ? () => (
              <Text
                onPress={() => {
                  setEditing(!editing);
                }}
                style={styles.headerRightText}
              >
                {editing ? "Cancel" : "Edit"}
              </Text>
            )
          : null
    });
  }, [editing, offset]);
  const handleScroll = event => {
    setOffset(event.nativeEvent.contentOffset.y);
  };
  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={event => handleScroll(event)}
      style={[styles.container, { backgroundColor: getColorSheet(darkTheme).background }]}
    >
      {editing ? (
        <EditContactScreen
          editing={editing}
          setEditing={setEditing}
          index={index}
          route={route}
          navigation={navigation}
          item={user}
        />
      ) : (
        <>
          {user.avatar ? (
            <Image style={styles.avatar} source={{ uri: user.avatar }} />
          ) : (
            <View style={styles.avatar}>
              <Text style={styles.initials}>
                {extractInitialsFromName(user.first_name, user.last_name)}
              </Text>
            </View>
          )}
          <Text style={[styles.name, { color: getColorSheet(darkTheme).text }]}>
            {user.first_name} {user.last_name}
          </Text>
          {route && route.params && route.params.sync ? (
            <Text style={{ textAlign: "center", color: getColorSheet(darkTheme).text }}>
              (Synced Contact)
            </Text>
          ) : null}
          {user.email && (
            <>
              <Text style={[styles.fieldTitle, { color: getColorSheet(darkTheme).text }]}>
                email
              </Text>
              <Text
                onPress={() => {
                  Linking.openURL(`mailto:${user.email}?subject=Greetings From Lazer`);
                }}
                style={[styles.fieldValue, { color: getColorSheet(darkTheme).text }]}
              >
                {user.email}
              </Text>
            </>
          )}
          {user.phone && (
            <>
              <Text style={[styles.fieldTitle, { color: getColorSheet(darkTheme).text }]}>
                {`phone number${user.phone.length > 0 ? "s" : null}`}
              </Text>
              {user.phone.map(el => (
                <View style={{ marginTop: 8 }}>
                  <Text>{el.label ? el.label : "default"}</Text>
                  <Text
                    onPress={() => {
                      Linking.openURL(`mailto:${user.email}?subject=Greetings From Lazer`);
                    }}
                    style={[styles.fieldValue, { color: getColorSheet(darkTheme).text }]}
                  >
                    {el.number}
                  </Text>
                </View>
              ))}
            </>
          )}
        </>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    padding: 12
  },
  avatar: {
    height: 120,
    width: 120,
    alignSelf: "center",
    backgroundColor: "#000",
    borderRadius: 60,
    justifyContent: "center"
  },
  initials: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 40
  },
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
  headerRightText: {
    paddingRight: 12,
    fontSize: 18,
    color: "#2962FF"
  }
});
